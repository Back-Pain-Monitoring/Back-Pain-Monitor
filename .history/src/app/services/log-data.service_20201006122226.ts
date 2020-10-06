import { Injectable } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {
  // TODO: extract to LogObject and LogDataService?

  public loaded: boolean = false;
  // datetime-page
  private datetime: Date;  // TODO: initialize. Changed to Date
  // TODO: list of possible body parts? possible paint types? As class variables

  // bodymap-page
  private pain_body_part: String; // TODO: change "S" string to "string"

  // symptomps-page
  private pain_intensity: number;
  private pain_type: String;  // ion-select
  private pain_duration: number;  // minutes
  private pain_cause: String;
  private pain_mobility: String;  // Moving, Resting, or Moving and Resting. Use ion-select (possibly with multiple option?)
  private pain_is_constant: boolean;  // assumes pain is either constant or intermittent

  // redflags-page
  private redflag_symptoms;  // TODO: figure out what type this is. Some kind of list probably. Whatever it is from ion-select with multiple option.

  // comments-page
  private comment: String;

  constructor() {

  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
