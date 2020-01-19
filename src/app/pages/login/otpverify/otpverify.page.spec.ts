import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtpverifyPage } from './otpverify.page';

describe('OtpverifyPage', () => {
  let component: OtpverifyPage;
  let fixture: ComponentFixture<OtpverifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpverifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtpverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
