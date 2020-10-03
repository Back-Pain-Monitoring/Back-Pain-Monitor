import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommentsPagePage } from './comments-page.page';

describe('CommentsPagePage', () => {
  let component: CommentsPagePage;
  let fixture: ComponentFixture<CommentsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
