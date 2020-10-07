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
  ];

  constructor() {
  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
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
