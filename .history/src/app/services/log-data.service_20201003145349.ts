import { Injectable } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {

  public loaded: boolean = false;
  private datetime: IonDatetime = ;


  constructor() {

  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
