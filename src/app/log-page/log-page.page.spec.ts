import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogPagePage } from './log-page.page';

describe('LogPagePage', () => {
  let component: LogPagePage;
  let fixture: ComponentFixture<LogPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
