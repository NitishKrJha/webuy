import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FootersComponent } from './footers.component';

describe('FootersComponent', () => {
  let component: FootersComponent;
  let fixture: ComponentFixture<FootersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
