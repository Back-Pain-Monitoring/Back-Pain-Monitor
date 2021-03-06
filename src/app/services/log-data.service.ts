import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from './auth.service';

export interface LogEntry {
  id: string;
  datetime: Date;
  body_parts: string[];
  intensity: number;
  type: string;
  timesBefore: number;
  nightPain: boolean;
  worse: Array<string>;
  better: Array<string>;
  cause: string;
  mobility: string[];      // TODO: could be more specific with types here. This list can only contain moving and/or resting
  is_constant: boolean;  // assumes pain is either constant or intermittent
  redflag_symptoms: string[];
  comment: string;
  uid: string;  // id of the user whose log this is
}

export interface LogFilter {
  datetime_min: Date;
  datetime_max: Date;
  intensity_min: Number;
  intensity_max: Number;
  body_part: string;
  type: String;
  timesBefore_lower: Number;
  timesBefore_upper: Number;
}

@Injectable({
  providedIn: 'root'
})
export class LogDataService {

  public loaded = false;
  private editing = false;  // to track whether the dataservice is currently editing a log
  public redflags = ["Unexplained weight loss", "Pain that is increased or unrelieved by rest",
    "Bladder or bowel incontinence", "Limited spinal range of motion"];
  public activities = ["bending", "sitting", "standing", "walking", "lying",
    "am", "as the day progresses", "pm", "still", "moving"];
  public isEnteredSubj: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(undefined);
  private logCollection: AngularFirestoreCollection<LogEntry>;
  public logSubj: BehaviorSubject<LogEntry[]> = new BehaviorSubject<LogEntry[]>([]);
  private dbSubscription: Subscription;

  constructor(private db: AngularFirestore, private authSvc: AuthService) {
    this.authSvc.uidSubj.subscribe(value => this.dbSubscribe(value));
  }

  private dbSubscribe(uid) {
    if (this.dbSubscription) {
      this.dbSubscription.unsubscribe();
    }
    this.logCollection = this.db.collection<LogEntry>('logs', ref => ref.where('uid', '==', uid).orderBy('datetime'));
    this.dbSubscription = this.logCollection.snapshotChanges().subscribe(
      (value: any) => {
        const logs = value.map(item => {
          const data = item.payload.doc.data();
          data.datetime = new Date(data.datetime.seconds * 1000);
          const id = item.payload.doc.id;
          data.id = id;
          return data;
        });
        console.log(logs);
        this.logSubj.next(logs);
      }
    );
  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }

  private createEmptyLog(): LogEntry {
    return {
      id: "-1",
      datetime: undefined,
      body_parts: [],
      intensity: undefined,
      type: undefined,
      timesBefore: undefined,
      nightPain: undefined,
      worse: [],
      better: [],
      cause: "",
      mobility: undefined,
      is_constant: undefined,
      redflag_symptoms: [],
      comment: "",
      uid: ""
    }
  }

  private currentLog: LogEntry = this.createEmptyLog();

  // getters and setters based on this: https://wizardforcel.gitbooks.io/tsbook/content/chapter09_ClassesInDepth.html#reffn_1
  public set currentLogDatetime(datetime: Date) { this.currentLog.datetime = datetime; }
  public get currentLogDatetime() { return this.currentLog.datetime; }
  public set currentLogBodyParts(body_parts: Array<string>) { this.currentLog.body_parts = body_parts; }
  public get currentLogBodyParts() { return this.currentLog.body_parts; }
  public set currentLogIntensity(intensity: number) { this.currentLog.intensity = intensity; }
  public get currentLogIntensity() { return this.currentLog.intensity; }
  public set currentLogType(type: string) { this.currentLog.type = type; }
  public get currentLogType() { return this.currentLog.type; }
  public set currentLogTimesBefore(times: number) { this.currentLog.timesBefore = 0; }
  public get currentLogTimesBefore() { return this.currentLog.timesBefore; }
  public set currentLogNightPain(pain: boolean) { this.currentLog.nightPain = false; }
  public get currentLogNightPain() { return this.currentLog.nightPain; }
  public set currentLogWorse(worse: Array<string>) { this.currentLog.worse = worse; }
  public get currentLogWorse() { return this.currentLog.worse; }
  public set currentLogBetter(better: Array<string>) { this.currentLog.better = better; }
  public get currentLogBetter() { return this.currentLog.better; }
  public set currentLogCause(cause: string) { this.currentLog.cause = cause; }
  public get currentLogCause() { return this.currentLog.cause; }
  public set currentLogMobility(mobility: string[]) { this.currentLog.mobility = mobility; }
  public get currentLogMobility() { return this.currentLog.mobility; }
  public set currentLogIs_constant(is_constant: boolean) { this.currentLog.is_constant = is_constant; }
  public get currentLogIs_constant() { return this.currentLog.is_constant; }
  public set currentLogRedflag_symptoms(redflag_symptoms: any) { this.currentLog.redflag_symptoms = redflag_symptoms; }
  public get currentLogRedflag_symptoms() { return this.currentLog.redflag_symptoms; }
  public set currentLogComment(comment: string) { this.currentLog.comment = comment; }
  public get currentLogComment() { return this.currentLog.comment; }

  // submit the current log entry
  public submitLogEntry() {
    this.currentLog.uid = this.authSvc.uidSubj.value;
    if (this.editing) {
      this.editLogEntry();
      return;
    }
    this.logCollection.add(this.currentLog);
    this.currentLog = this.createEmptyLog();
  }

  public startEditLog(log: LogEntry) {
    this.currentLog = log;
    this.editing = true;
  }

  public editLogEntry() {
    this.logCollection.doc(`${this.currentLog.id}`).update(this.currentLog);
    this.currentLog = this.createEmptyLog();
  }

  public deleteLog(log: LogEntry) {
    this.logCollection.doc(`${log.id}`).delete();
  }

  public printLogEntry(entry?: LogEntry) {
    if (typeof (entry) === "undefined") {
      entry = this.currentLog;
    }
    console.log("printing log entry:");
    console.log(`id: ${entry.id}`);
    console.log(`datetime: ${entry.datetime}`);
    console.log(`body_parts: ${entry.body_parts}`);
    console.log(`intensity: ${entry.intensity}`);
    console.log(`type: ${entry.type}`);
    console.log(`times before: ${entry.timesBefore}`);
    console.log(`pain at night: ${entry.nightPain}`);
    console.log(`cause: ${entry.cause}`);
    console.log(`mobility: ${entry.mobility}`);
    console.log(`is_constant: ${entry.is_constant}`);
    console.log(`redflag_symptoms: ${entry.redflag_symptoms}`);
    console.log(`comment: ${entry.comment}`);
  }

  public printLogEntries() {
    this.logSubj.value.forEach((entry: LogEntry) => this.printLogEntry(entry));
  }

  /*
  lastIndex: the index 1 after the last retrieved log
  i.e., let's say last time we called this we did n=2 so we'd have slice(0, 2), then when we call this again we would do lastIndex=2
  */
  public getNextLogs(n: number, lastIndex?: number): LogEntry[] {
    if (lastIndex === undefined) {
      lastIndex = 0;
    }
    if (lastIndex >= this.logSubj.value.length) {
      // we've returned all the data already, so just return an empty list
      return [];
    }
    return this.logSubj.value.slice(lastIndex, lastIndex + n);
  }

  public isEditing(): boolean {
    return this.editing;
  }

  public createEmptyFilter(): LogFilter {
    return {
      datetime_min: undefined,
      datetime_max: undefined,
      intensity_min: undefined,
      intensity_max: undefined,
      body_part: undefined,
      type: undefined,
      timesBefore_lower: undefined,
      timesBefore_upper: undefined
    }
  }

  public getLogsWithFilter(f: LogFilter): LogEntry[] {
    return this.logSubj.value.filter((log) => {
      return (f.datetime_min === undefined || log.datetime >= f.datetime_min) &&
        (f.datetime_max === undefined || log.datetime <= f.datetime_max) &&
        (f.intensity_min === undefined || log.intensity >= f.intensity_min) &&
        (f.intensity_max === undefined || log.intensity <= f.intensity_max) &&
        (f.body_part === undefined || log.body_parts.includes(f.body_part)) &&
        (f.type === undefined || log.type === f.type) &&
        (f.timesBefore_lower === undefined || log.timesBefore >= f.timesBefore_lower) &&
        (f.timesBefore_upper === undefined || log.timesBefore <= f.timesBefore_upper);
    });
  }

  public updateIsEntered(value: boolean) {
    this.isEnteredSubj.next(value);
  }
}
