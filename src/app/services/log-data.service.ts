import { Injectable } from '@angular/core';

export interface LogEntry {
  datetime: Date;
  body_part: string;
  intensity: number;
  type: string;          // enumeration?
  duration: number;      // in minutes
  cause: string;
  mobility: string;      // Moving, Resting, or Moving and Resting.  Use enumeration?
  is_constant: boolean;  // assumes pain is either constant or intermittent
  redflag_symptoms: any;  // TODO: figure out what type this is. Some kind of list probably. Whatever it is from ion-select with multiple option.
  comment: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogDataService {

  public loaded = false;

  /*
  [4:18 PM] Victor Norman
    One way, which I think might work well, is to have the data service we have also be able to store a partially constructed log entry object. And, an api to get/set values from/to that object. Then each page queries the data service for that object or the properties it uses from that object.  In the end, the object is moved from temporary to permanant and added to the completed list of log entries.  I think that might work well. Then nothing has to be passed back and forth between pages -- each page just goes to the data service and gets the values from this temporary/in-process object.
 [4:19 PM] Victor Norman
    If/when we get to editing a log entry, it gets copied into the temporary object with all the values, and the pages will display those values and allow them to be edited, before getting to the end, where the obejct is put back into the permanant list!  Cool
<https://teams.microsoft.com/l/message/19:1e215c74df4a45a8bcceca92cd311117@thread.tacv2/1602101910156?tenantId=756349b9-0610-4b01-917b-2a4ac10df947&amp;groupId=1e35b6b8-eeca-4e53-a065-cb03b5f03c44&amp;parentMessageId=1602097707945&amp;teamName=Back Pain Monitoring App&amp;channelName=General&amp;createdTime=1602101910156>
  */

  private logEntries: LogEntry[] = [
    {
      datetime: new Date(),
      body_part: "back",
      intensity: 7,
      type: "shooting pain",    // not what this field was intended for, i think.
      duration: 120,
      cause: "lifting",
      mobility: "Moving",
      is_constant: true,
      redflag_symptoms: [],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      datetime: new Date(),
      body_part: "left shoulder",
      intensity: 7,
      type: "dull ache",    // not what this field was intended for, i think.
      duration: 120,
      cause: "lifting",
      mobility: "Moving",
      is_constant: true,
      redflag_symptoms: [],
      comment: "we might need to store where on the body the pain is... like an x/y position?",
    },
    {
      datetime: null,
      body_part: null,
      intensity: null,
      type: null,
      duration: null,
      cause: null,
      mobility: null,
      is_constant: null,
      redflag_symptoms: [],
      comment: null,
    }
  ];

  private currentLog: LogEntry = {
    datetime: undefined,
    body_part: undefined,
    intensity: undefined,
    type: undefined,
    duration: undefined,      // in minutes
    cause: undefined,
    mobility: undefined,      // Moving, Resting, or Moving and Resting.  Use enumeration?
    is_constant: undefined,  // assumes pain is either constant or intermittent
    redflag_symptoms: undefined,  // TODO: figure out what type this is. Some kind of list probably. Whatever it is from ion-select with multiple option.
    comment: undefined
  }

  constructor() {
  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }

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
  public set currentLogMobility(mobility: string) { this.currentLog.mobility = mobility; }
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
    // TODO: reset currentLog
  }

  createLogEntry(): void {
    this.logEntries.push({
      // TODO: should this be undefined?
      datetime: null,
      body_part: null,
      intensity: null,
      type: null,
      duration: null,
      cause: null,
      mobility: null,
      is_constant: null,
      redflag_symptoms: [],
      comment: null,
    });
  }

  setValuesForLogEntry(index, data): void {
    const entry = this.logEntries[index];
    // TODO: individual functions?
    if (data.datetime != undefined) {
      entry.datetime = data.datetime;
    }
    if (data.body_part != undefined) {
      entry.body_part = data.body_part;
    }
    if (data.intensity != undefined) {
      entry.intensity = data.intensity;
    }
    if (data.type != undefined) {
      entry.type = data.type;
    }
    if (data.duration != undefined) {
      entry.duration = data.duration;
    }
    if (data.cause != undefined) {
      entry.cause = data.cause;
    }
    if (data.mobility != undefined) {
      entry.mobility = data.mobility;
    }
    if (data.is_constant != undefined) {
      entry.is_constant = data.is_constant;
    }
    if (data.redflag_symptoms != undefined) {
      entry.redflag_symptoms = data.redflag_symptoms;
    }
  }

  setLogEntry(data): void {
    this.logEntries.push({
      datetime: data.datetime,
      body_part: data.body_part,
      intensity: data.intensity,
      type: data.type,
      duration: data.duration,
      cause: data.cause,
      mobility: data.mobility,
      is_constant: data.is_constant,
      redflag_symptoms: data.redflag_symptoms,
      comment: data.comment,
    });

    this.save();
  }

  save(): void {

  }

  // TODO: functionality to edit log?

  // TODO: more with slugs?
}
