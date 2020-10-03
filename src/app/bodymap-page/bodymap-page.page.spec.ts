import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BodymapPagePage } from './bodymap-page.page';

describe('BodymapPagePage', () => {
  let component: BodymapPagePage;
  let fixture: ComponentFixture<BodymapPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodymapPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BodymapPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
