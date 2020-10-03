import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {

  public loaded: boolean = false;
  private datetime: DateTime

  constructor() {

  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
