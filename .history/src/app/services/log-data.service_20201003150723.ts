import { Injectable } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {
  // TODO: extract to LogObject and LogDataService?

  public loaded: boolean = false;
  private datetime: IonDatetime;  // TODO: initialize
  // TODO: list of possible body parts? possible paint types? As class variables
  private pain_body_part: String;
  private pain_intensity: number;
  private pain_type: String;
  private pain_duration: number;  // minutes
  private pain_cause: String;
  private pain_mobility: number;  // 1 for moving, 2 for resting, 3 for both

  constructor() {

  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
