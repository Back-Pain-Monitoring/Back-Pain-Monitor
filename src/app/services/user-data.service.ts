import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';

export interface UserInfo {
  uid: string;
  email: string;
  userName: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private users: UserInfo[] = [];
  public usersSubj: BehaviorSubject<UserInfo[]> = new BehaviorSubject<UserInfo[]>(null);

  constructor(private db: AngularFirestore) {
    this.db.collection<UserInfo>('users').valueChanges().subscribe(
      users => {
        this.users = users;
        this.usersSubj.next(this.users);
      }
    );
  }

  getUsers() {
    return this.users;
  }

  uidToName(uid: string) {
    return this.users.find(u => u.uid == uid).userName;
  }

  saveUserInfo(uid: string, userName: string, email: string) {
    const data: UserInfo = {
      uid,
      userName,
      email,
    };
    console.log('saveUserInfo: ', data)
    this.db.collection<UserInfo>('users').doc(uid).set(data);
  }

}
