import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedflagsPagePage } from './redflags-page.page';

describe('RedflagsPagePage', () => {
  let component: RedflagsPagePage;
  let fixture: ComponentFixture<RedflagsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedflagsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedflagsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
