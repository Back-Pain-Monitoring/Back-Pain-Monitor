import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewLogsPage } from './view-logs.page';

describe('ViewLogsPage', () => {
  let component: ViewLogsPage;
  let fixture: ComponentFixture<ViewLogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLogsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
