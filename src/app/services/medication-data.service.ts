import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from './auth.service';

export interface medicationEntry {
  id: string;
  datetime: Date;
  med_type: string;
  med_comment: string;
  intensity: number;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class MedicationDataService {
  private medicationEntries: medicationEntry[] = [
  ];
  private dbSubscription: Subscription;
  private medCollection: AngularFirestoreCollection<medicationEntry>;
  public medSubj: BehaviorSubject<medicationEntry[]> = new BehaviorSubject<medicationEntry[]>([]);

  constructor(private db: AngularFirestore, private authSvc: AuthService) {
    this.authSvc.uidSubj.subscribe(value => this.dbSubscribe(value));
  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }

  private dbSubscribe(uid) {
    if (this.dbSubscription) {
      this.dbSubscription.unsubscribe();
    }
    this.medCollection = this.db.collection<medicationEntry>('medications', ref => ref.where('uid', '==', uid).orderBy('datetime'));
    this.dbSubscription = this.medCollection.snapshotChanges().subscribe(
      (value: any) => {
        const meds = value.map(item => {
          const data = item.payload.doc.data();
          data.datetime = new Date(data.datetime.seconds * 1000);
          const id = item.payload.doc.id;
          data.id = id;
          return data;
        });
        console.log(meds);
        this.medSubj.next(meds);
      }
    );
  }

  private createEmptyMed(): medicationEntry {
    return {
      id: "-1",
      datetime: undefined,
      med_type: "",
      med_comment: "",
      intensity: undefined,
      uid: ""
    }
  }


  private currentMed: medicationEntry = this.createEmptyMed();

  // getters & setters based on this: https://wizardforcel.gitbooks.io/tsbook/content/chapter09_ClassesInDepth.html#reffn_1
  public set currentMedDateTime(datetime: Date) { this.currentMed.datetime = datetime; }
  public get currentMedDateTime() { return this.currentMed.datetime; }

  public set currentMedMed_type(med_type: string) { this.currentMed.med_type = med_type; }
  public get currentMedMed_type() { return this.currentMed.med_type; }

  public set currentMedComment(med_comment: string) { this.currentMed.med_comment = med_comment; }
  public get currentMedComment() { return this.currentMed.med_comment; }

  public set currentMedIntensity(intensity: number) { this.currentMed.intensity = intensity; }
  public get currentMedIntensity() { return this.currentMed.intensity; }


  // Submit current Med Entry
  public submitMedEntry() {
    this.currentMed.uid = this.authSvc.uidSubj.value;
    this.medCollection.add(this.currentMed);
    this.currentMed = this.createEmptyMed();
  }

  public getMeds(): medicationEntry[] {
    return this.medicationEntries;
  }

  public printMedEntry(entry?: medicationEntry) {
    if (typeof (entry) === "undefined") {
      entry = this.currentMed;
    }
    console.log("Printing Med Entry");
    console.log(`id: ${entry.id}`);
    console.log(`datetime: ${entry.datetime}`);
    console.log(`med_type: ${entry.med_type}`);
    console.log(`intensity: ${entry.intensity}`);
    console.log(`comment: ${entry.med_comment}`);
  }

  public printMedEntries() {
    this.medicationEntries.forEach((entry: medicationEntry) => this.printMedEntry);
  }



}