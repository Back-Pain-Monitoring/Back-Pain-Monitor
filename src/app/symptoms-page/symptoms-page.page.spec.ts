import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomsPagePage } from './symptoms-page.page';

describe('SymptomsPagePage', () => {
  let component: SymptomsPagePage;
  let fixture: ComponentFixture<SymptomsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
