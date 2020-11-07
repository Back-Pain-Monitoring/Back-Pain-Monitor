import { Injectable } from '@angular/core';

export interface medicationEntry {
  id: number;
  datetime: Date;
  med_type: string;
  comment: string;
  intensity: number;
}

@Injectable({
  providedIn: 'root'
})
export class MedicationDataService {
  private medicationEntries: medicationEntry[] = [
    {
      id: 0,
      datetime: new Date("2020-10-23"),
      med_type: "Acetamenophine",
      comment: "It is not working",
      intensity: 5
    },
    {
      id: 1,
      datetime: new Date("2020-10-28"),
      med_type: "NSAID",
      comment: "Makes me queezy",
      intensity: 4
    },
    {
      id: 2,
      datetime: new Date("2020-11-4"),
      med_type: "Anti Seizure Medication",
      comment: "Makes Pain Worse",
      intensity: 8
    }
  ];

  constructor() {
  }

  load(): Promise<boolean> {
    return Promise.resolve(true);
  }

  private createEmptyMed(): medicationEntry {
    return {
      id: undefined,
      datetime: undefined,
      med_type: undefined,
      comment: undefined,
      intensity: undefined
    }
  }

  private currentMed: medicationEntry = this.createEmptyMed();

  // getters & setters based on this: https://wizardforcel.gitbooks.io/tsbook/content/chapter09_ClassesInDepth.html#reffn_1
  public set currentMedId(id: number) { this.currentMed.intensity = id; }
  public get currentMedId() { return this.currentMed.id; }

  public set currentMedDateTime(datetime: Date) { this.currentMed.datetime = datetime; }
  public get currentMedDateTime() { return this.currentMed.datetime; }

  public set currentMedMed_type(med_type: string) { this.currentMed.med_type = med_type; }
  public get currentMedMed_type() { return this.currentMed.med_type; }

  public set currentMedComment(comment: string) { this.currentMed.comment = comment; }
  public get currentMedComment() { return this.currentMed.comment; }

  public set currentMedIntensity(intensity: number) { this.currentMed.intensity = intensity; }
  public get currentMedIntensity() { return this.currentMed.intensity; }


  // Submit current Med Entry
  public submitMedEntry() {
    this.currentMed.id = this.medicationEntries.length;
    this.medicationEntries.push(this.currentMed);
    this.medicationEntries.sort((a, b) => a.datetime.getTime() - b.datetime.getTime());
    // TODO: Send the log to the database
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
    console.log(`comment: ${entry.comment}`);
  }

  public printMedEntries() {
    this.medicationEntries.forEach((entry: medicationEntry) => this.printMedEntry);
  }



}