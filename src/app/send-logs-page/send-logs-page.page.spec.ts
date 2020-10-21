import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendLogsPagePage } from './send-logs-page.page';

describe('SendLogsPagePage', () => {
  let component: SendLogsPagePage;
  let fixture: ComponentFixture<SendLogsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendLogsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendLogsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
