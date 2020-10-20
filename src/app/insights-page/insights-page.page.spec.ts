import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsightsPagePage } from './insights-page.page';

describe('InsightsPagePage', () => {
  let component: InsightsPagePage;
  let fixture: ComponentFixture<InsightsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsightsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
