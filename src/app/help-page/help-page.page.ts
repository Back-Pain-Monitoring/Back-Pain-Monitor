import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.page.html',
  styleUrls: ['./help-page.page.scss'],
})
export class HelpPagePage implements OnInit {

  public appNameHere = false;
  public doctorShown = false;
  public filter = false;
  
  constructor() { }

  ngOnInit() {
  }

}
