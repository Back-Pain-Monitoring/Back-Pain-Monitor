import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatetimePagePage } from './datetime-page.page';

describe('DatetimePagePage', () => {
  let component: DatetimePagePage;
  let fixture: ComponentFixture<DatetimePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatetimePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
