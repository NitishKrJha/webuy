import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddeditaddressPage } from './addeditaddress.page';

describe('AddeditaddressPage', () => {
  let component: AddeditaddressPage;
  let fixture: ComponentFixture<AddeditaddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditaddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddeditaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
