import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage {

  constructor( private modalCtrl: ModalController ) { }

  // method of dismissing modal
  dismissModal() {
    this.modalCtrl.dismiss();  
  }

}
