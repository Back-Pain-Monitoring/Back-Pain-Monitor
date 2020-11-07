import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicationPage } from './medication.page';

describe('MedicationPage', () => {
  let component: MedicationPage;
  let fixture: ComponentFixture<MedicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
