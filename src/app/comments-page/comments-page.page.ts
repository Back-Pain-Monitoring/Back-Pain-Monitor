import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.page.html',
  styleUrls: ['./comments-page.page.scss'],
})
export class CommentsPagePage implements OnInit {

  constructor( private alertCtrl: AlertController) {

   }

  ngOnInit() {
  }
  // private toastCtrl: ToastController
  // presentToast() {
  //   let toast = this.toastCtrl.create({
  //     message: 'User was added successfully',
  //     duration: 3000,
  //     position: 'top'
  //   });
  
  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed toast');
  //   });
  
  //   toast.present();
  // }

  makeAlert(): void {
    this.alertCtrl.create({
      header: 'Alert',
      message: 'Your log is submitted',
      inputs: [
        {
          type: 'text',
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
        }
      ]
    }).then((prompt) => {
      prompt.present();
    });
  }
}
