import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {

  public loaded: boolean = false;

  constructor() {

  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
