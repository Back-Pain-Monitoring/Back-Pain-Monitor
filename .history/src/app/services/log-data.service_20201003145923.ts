import { Injectable } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {
  // TODO: extract to LogObject and LogDataService?

  public loaded: boolean = false;
  private datetime: IonDatetime;  // TODO: initialize
  // TODO: list of possible body parts? As a class variable
  private body_part: String;
  private intensity: int;

  constructor() {

  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
