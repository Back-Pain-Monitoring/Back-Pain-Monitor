import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewlogsPagePage } from './viewlogs-page.page';

describe('ViewlogsPagePage', () => {
  let component: ViewlogsPagePage;
  let fixture: ComponentFixture<ViewlogsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlogsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewlogsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
