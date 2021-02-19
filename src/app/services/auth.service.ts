import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uid: string = '';
  private email: string = '';
  private userName: string = '';

  constructor(private dataSvc: UserDataService) { }

  async loginUser(userName: string, email: string, password: string): Promise<firebase.auth.UserCredential> {
    console.log(`trying to login with ${email}, ${password}`);
    this.email = email;
    this.userName = userName;
    return new Promise(async (resolve, reject) => {
      try {
        console.log('loginUser: calling signInWithEmail')
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('loginUser: calling signInWithEmail DONE, res: ', res)
        this.uid = res.user.uid;
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }

  signupUser(userName: string, email: string, password: string): Promise<firebase.auth.UserCredential> {
    this.email = email;
    this.userName = userName;
    return new Promise(async (resolve, reject) => {
      try {
        console.log('loginUser: calling createUser')
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('loginUser: calling createUser DONE, res: ', res)
        this.uid = res.user.uid;
        // New user: remember their userName, uid, etc.
        this.dataSvc.saveUserInfo(this.uid, userName, email);
        this.userName = userName;
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
  }

  getCurrentUser(): string {
    return firebase.auth().currentUser.email;
  }

  getUid() {
    return this.uid;
  }

  getUserName() {
    return this.userName;
  }

  getShortUserName() {
    return this.userName || '?';
  }

}
