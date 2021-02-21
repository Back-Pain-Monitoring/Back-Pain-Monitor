import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

interface User {
  userName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = {
    userName: '',
    email: '',
    password: '',
  };
  public loading: HTMLIonLoadingElement;

  constructor(
    private loadingCtrl: LoadingController,
    private authSvc: AuthService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    try {
      const res = await this.authSvc.loginUser(this.user.userName, this.user.email, this.user.password);
      this.loading.dismiss();
      this.navCtrl.navigateRoot('/tabs/home');
    } catch (error) {
      this.loading.dismiss();
      const alert = await this.alertCtrl.create({
        message: error,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }],
      });
      alert.present();
    }
  }

  async resetPassword(): Promise<void> {
    if (!this.user.email) {
      return;     // put up an alert or something.
    }

    console.log('password reset called')
    this.authSvc.resetPassword(this.user.email);
    const t = await this.toastCtrl.create({
      message: 'Email has been sent to you to use to reset your password.',
      duration: 2000,
    });
    await t.present();
  }

  async createAccount(): Promise<void> {
    try {
      await this.authSvc.signupUser(this.user.userName, this.user.email, this.user.password);
      this.navCtrl.navigateRoot('/tabs/home');
    } catch (error) {
      const alert = await this.alertCtrl.create({
        message: error,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }],
      });
      alert.present();
    }
  }

}
