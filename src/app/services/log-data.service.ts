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
      duration: 120,
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
      datetime: new Date(),
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
      datetime: new Date(),
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
      datetime: new Date(),
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
      datetime: new Date(),
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
      datetime: new Date(),
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
      datetime: new Date(),
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

  public getLogs(): LogEntry[] {
    return this.logEntries;
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
      redflag_symptoms: undefined,
      comment: undefined
    }
  }

  private currentLog: LogEntry = this.createEmptyLog();

  constructor() {
  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }

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

  // submit the current log entry
  public submitLogEntry() {
    this.logEntries.push(this.currentLog);
    // TODO: send the log to the database
    this.currentLog = this.createEmptyLog();
  }
}
