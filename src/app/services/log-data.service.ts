import { Injectable } from '@angular/core';

export interface LogEntry {
  id: number;
  datetime: Date;
  body_part: string;
  intensity: number;
  type: string;
  timesBefore: number;
  cause: string;
  mobility: string[];      // TODO: could be more specific with types here. This list can only contain moving and/or resting
  is_constant: boolean;  // assumes pain is either constant or intermittent
  redflag_symptoms: string[];
  comment: string;
}

export interface LogFilter {
  datetime_min: Date;
  datetime_max: Date;
  intensity_min: number;
  intensity_max: number;
  body_part: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogDataService {

  public loaded = false;
  private editing = false;  // to track whether the dataservice is currently editing a log
  public redflags = ["Unexplained weight loss", "Pain that is increased or unrelieved by rest",
    "Bladder or bowel incontinence", "Limited spinal range of motion"]

  private logEntries: LogEntry[] = [
    {
      id: 0,
      datetime: new Date("2020-10-23"),
      body_part: "right shoulder",
      intensity: 8,
      type: "burning",
      timesBefore: 0,
      cause: "unknown",
      mobility: ["moving"],
      is_constant: false,
      redflag_symptoms: ["Bladder or bowel incontinence", "Limited spinal range of motion"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      id: 1,
      datetime: new Date("2020-10-24"),
      body_part: "middle back",
      intensity: 3,
      type: "aching",
      timesBefore: 2,
      cause: "unknown",
      mobility: ["resting"],
      is_constant: false,
      redflag_symptoms: [],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      id: 2,
      datetime: new Date("2020-10-25"),
      body_part: "lower back",
      intensity: 8,
      type: "numbness",
      timesBefore: 3,
      cause: "unknown",
      mobility: ["moving", "resting"],
      is_constant: false,
      redflag_symptoms: ["Limited spinal range of motion", "Pain that is increased or unrelieved by rest"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      id: 3,
      datetime: new Date("2020-10-27"),
      body_part: "upper back",
      intensity: 2,
      type: "shooting",
      timesBefore: 4,
      cause: "unknown",
      mobility: ["resting"],
      is_constant: true,
      redflag_symptoms: ["Unexplained weight loss"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      id: 4,
      datetime: new Date("2020-10-28"),
      body_part: "upper back",
      intensity: 2,
      type: "shooting",
      timesBefore: 2,
      cause: "unknown",
      mobility: ["resting"],
      is_constant: true,
      redflag_symptoms: [],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      id: 5,
      datetime: new Date("2020-10-30"),
      body_part: "middle back",
      intensity: 3,
      type: "stabbing",
      timesBefore: 1,
      cause: "unknown",
      mobility: ["resting"],
      is_constant: true,
      redflag_symptoms: ["Bladder or bowel incontinence"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      id: 6,
      datetime: new Date(),
      body_part: "back",
      intensity: 7,
      type: "shooting",
      timesBefore: 10,
      cause: "lifting",
      mobility: ["moving"],
      is_constant: true,
      redflag_symptoms: [],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      id: 7,
      datetime: new Date(),
      body_part: "left shoulder",
      intensity: 4,
      type: "numbness",
      timesBefore: 23,
      cause: "lifting",
      mobility: ["moving"],
      is_constant: true,
      redflag_symptoms: ["Bladder or bowel incontinence"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
  ];

  constructor() {
  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }

  private createEmptyLog(): LogEntry {
    return {
      id: -1,
      datetime: undefined,
      body_part: undefined,
      intensity: undefined,
      type: undefined,
      timesBefore: undefined,
      cause: undefined,
      mobility: undefined,
      is_constant: undefined,
      redflag_symptoms: [],
      comment: undefined
    }
  }

  private currentLog: LogEntry = this.createEmptyLog();

  // getters and setters based on this: https://wizardforcel.gitbooks.io/tsbook/content/chapter09_ClassesInDepth.html#reffn_1
  public set currentLogDatetime(datetime: Date) { this.currentLog.datetime = datetime; }
  public get currentLogDatetime() { return this.currentLog.datetime; }
  public set currentLogBody_part(body_part: string) { this.currentLog.body_part = body_part; }
  public get currentLogBody_part() { return this.currentLog.body_part; }
  public set currentLogIntensity(intensity: number) { this.currentLog.intensity = intensity; }
  public get currentLogIntensity() { return this.currentLog.intensity; }
  public set currentLogType(type: string) { this.currentLog.type = type; }
  public get currentLogType() { return this.currentLog.type; }
  public set currentLogTimesBefore(times: number) { this.currentLog.timesBefore = times; }
  public get currentLogTimesBefore() { return this.currentLog.timesBefore; }
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
    if (this.editing) {
      this.editLogEntry();
      return;
    }
    this.currentLog.id = this.logEntries.length;
    this.logEntries.push(this.currentLog);
    this.logEntries.sort((a, b) => a.datetime.getTime() - b.datetime.getTime());
    // TODO: send the log to the database
    this.currentLog = this.createEmptyLog();
  }

  public startEditLog(log) {
    this.currentLog = log;
    this.editing = true;
  }

  public editLogEntry() {
    // TODO: change this
    this.logEntries[this.currentLog.id] = this.currentLog;
    this.currentLog = this.createEmptyLog();
  }

  public printLogEntry(entry?: LogEntry) {
    if (typeof (entry) === "undefined") {
      entry = this.currentLog;
    }
    console.log("printing log entry:");
    console.log(`id: ${entry.id}`);
    console.log(`datetime: ${entry.datetime}`);
    console.log(`body_part: ${entry.body_part}`);
    console.log(`intensity: ${entry.intensity}`);
    console.log(`type: ${entry.type}`);
    console.log(`times before: ${entry.timesBefore}`);
    console.log(`cause: ${entry.cause}`);
    console.log(`mobility: ${entry.mobility}`);
    console.log(`is_constant: ${entry.is_constant}`);
    console.log(`redflag_symptoms: ${entry.redflag_symptoms}`);
    console.log(`comment: ${entry.comment}`);
  }

  public printLogEntries() {
    this.logEntries.forEach((entry: LogEntry) => this.printLogEntry(entry));
  }



  public getLogs(): LogEntry[] {
    return this.logEntries;
  }

  /*
  lastIndex: the index 1 after the last retrieved log
  i.e., let's say last time we called this we did n=2 so we'd have slice(0, 2), then when we call this again we would do lastIndex=2
  */
  public getNextLogs(n: number, lastIndex?: number): LogEntry[] {
    if (lastIndex === undefined) {
      lastIndex = 0;
    }
    if (lastIndex >= this.logEntries.length) {
      // we've returned all the data already, so just return an empty list
      return [];
    }
    return this.logEntries.slice(lastIndex, lastIndex + n);
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
    }
  }

  public getLogsWithFilter(f: LogFilter): LogEntry[] {
    return this.logEntries.filter((log) => {
      return (f.datetime_min === undefined || log.datetime >= f.datetime_min) &&
        (f.datetime_max === undefined || log.datetime <= f.datetime_max) &&
        (f.intensity_min === undefined || log.intensity >= f.intensity_min) &&
        (f.intensity_max === undefined || log.intensity <= f.intensity_max) &&
        (f.body_part === undefined || log.body_part === f.body_part) &&
        (f.type === undefined || log.type === f.type)
    });
  }
}
