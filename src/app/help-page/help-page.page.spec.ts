import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpPagePage } from './help-page.page';

describe('HelpPagePage', () => {
  let component: HelpPagePage;
  let fixture: ComponentFixture<HelpPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
