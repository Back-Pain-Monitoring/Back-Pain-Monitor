import { Injectable } from '@angular/core';

export interface LogEntry {
  datetime: Date;
  body_part: string;
  intensity: number;
  type: string;          // enumeration?
  duration: number;      // in minutes
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
  duration_min: number;
  duration_max: number;
}

@Injectable({
  providedIn: 'root'
})
export class LogDataService {

  public loaded = false;

  private logEntries: LogEntry[] = [
    {
      datetime: new Date(),
      body_part: "back",
      intensity: 7,
      type: "shooting pain",    // not what this field was intended for, i think.
      duration: 70,
      cause: "lifting",
      mobility: ["moving"],
      is_constant: true,
      redflag_symptoms: [],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      datetime: new Date(),
      body_part: "left shoulder",
      intensity: 4,
      type: "dull ache",    // not what this field was intended for, i think.
      duration: 25,
      cause: "lifting",
      mobility: ["moving"],
      is_constant: true,
      redflag_symptoms: ["loss of bowel movement", "numbness"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      datetime: new Date("2020-01-03"),
      body_part: "right shoulder",
      intensity: 8,
      type: "Burning",    // not what this field was intended for, i think.
      duration: 25,
      cause: "unknown",
      mobility: ["moving"],
      is_constant: true,
      redflag_symptoms: ["loss of bowel movement", "numbness"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      datetime: new Date("2020-01-04"),
      body_part: "lower back",
      intensity: 8,
      type: "Numbness",    // not what this field was intended for, i think.
      duration: 25,
      cause: "unknown",
      mobility: ["moving", "resting"],
      is_constant: false,
      redflag_symptoms: ["loss of bowel movement", "numbness"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      datetime: new Date("2020-01-05"),
      body_part: "upper back",
      intensity: 2,
      type: "Shooting",    // not what this field was intended for, i think.
      duration: 2,
      cause: "unknown",
      mobility: ["resting"],
      is_constant: true,
      redflag_symptoms: ["loss of bowel movement", "numbness"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      datetime: new Date("2020-01-06"),
      body_part: "middle back",
      intensity: 3,
      type: "Aching",    // not what this field was intended for, i think.
      duration: 40,
      cause: "unknown",
      mobility: ["resting"],
      is_constant: true,
      redflag_symptoms: ["loss of bowel movement", "numbness"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      datetime: new Date("2020-01-07"),
      body_part: "upper back",
      intensity: 2,
      type: "Shooting",    // not what this field was intended for, i think.
      duration: 2,
      cause: "unknown",
      mobility: ["resting"],
      is_constant: true,
      redflag_symptoms: ["loss of bowel movement", "numbness"],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      datetime: new Date("2020-01-08"),
      body_part: "middle back",
      intensity: 3,
      type: "Aching",    // not what this field was intended for, i think.
      duration: 40,
      cause: "unknown",
      mobility: ["resting"],
      is_constant: true,
      redflag_symptoms: ["loss of bowel movement", "numbness"],
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
      datetime: undefined,
      body_part: undefined,
      intensity: undefined,
      type: undefined,
      duration: undefined,
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
  public set currentLogDuration(duration: number) { this.currentLog.duration = duration; }
  public get currentLogDuration() { return this.currentLog.duration; }
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
    this.logEntries.push(this.currentLog);
    // TODO: send the log to the database
    this.currentLog = this.createEmptyLog();
  }

  public printLogEntry(entry?: LogEntry) {
    if (typeof (entry) === "undefined") {
      entry = this.currentLog;
    }
    console.log("printing log entry:");
    console.log(`datetime: ${entry.datetime}`);
    console.log(`body_part: ${entry.body_part}`);
    console.log(`intensity: ${entry.intensity}`);
    console.log(`type: ${entry.type}`);
    console.log(`duration: ${entry.duration}`);
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

  public createEmptyFilter(): LogFilter {
    return {
      datetime_min: undefined,
      datetime_max: undefined,
      intensity_min: undefined,
      intensity_max: undefined,
      body_part: undefined,
      type: undefined,
      duration_min: undefined,
      duration_max: undefined,
    }
  }

  public getLogsWithFilter(f: LogFilter): LogEntry[] {
    return this.logEntries.filter((log) => {
      return (f.datetime_min === undefined || log.datetime >= f.datetime_min) &&
        (f.datetime_max === undefined || log.datetime <= f.datetime_max) &&
        (f.intensity_min === undefined || log.intensity >= f.intensity_min) &&
        (f.intensity_max === undefined || log.intensity <= f.intensity_max) &&
        (f.body_part === undefined || log.body_part === f.body_part) &&
        (f.type === undefined || log.type === f.type) &&
        (f.duration_min === undefined || log.duration >= f.duration_min) &&
        (f.duration_max === undefined || log.duration <= f.duration_max);
    });
  }
}
