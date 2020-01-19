import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends BaseComponent implements OnInit  {
  public signupForm: FormGroup;
  phoneNumber: any = '';
  tagHide: any = true;
  otpSend: any = '0';
  otpSendName: any = 'Send OTP';
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public platform: Platform,
    public events: Events,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public loading: LoadingService,
    injector: Injector
  ) {
    super(injector);
    this.initBaseComponent();
    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required])],
      mobileNumber: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      address2: ['', Validators.compose([])],
      state: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      pinCode: ['', Validators.compose([Validators.required])],
      profession: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  handleApiResponse(data) {
    this.loading.dismiss();
    if (data.resultType === con.sendOTP) {
      const successMessage = data.result && data.result.message ? data.result.message : 'OTP send successully';
      if (data.result.status === 1) {
        this.signupForm = this.formBuilder.group({
          email: [this.signupForm.value.email, Validators.compose([Validators.required, Validators.email])],
          name: [this.signupForm.value.name, Validators.compose([Validators.required])],
          mobileNumber: [this.signupForm.value.mobileNumber, Validators.compose([Validators.required])],
          gender: [this.signupForm.value.gender, Validators.compose([Validators.required])],
          dob: [this.signupForm.value.dob, Validators.compose([Validators.required])],
          address: [this.signupForm.value.address, Validators.compose([Validators.required])],
          address2: [this.signupForm.value.address2, Validators.compose([])],
          state: [this.signupForm.value.state, Validators.compose([Validators.required])],
          city: [this.signupForm.value.city, Validators.compose([Validators.required])],
          pinCode: [this.signupForm.value.pinCode, Validators.compose([Validators.required])],
          profession: [this.signupForm.value.profession, Validators.compose([Validators.required])],
          otp: ['', Validators.compose([Validators.required])]
        });
        this.otpSend = '1';
      }
      this.base.shared.Alert.show_alert('Success', successMessage);
    } else if (data.resultType === con.register) {
      const successMessage = data.result && data.result.message ? data.result.message : 'Registration Successfully';
      this.base.shared.Alert.show_alert('Success', successMessage);
    }
  }

  handleApiResponseError(data) {
    console.log('data', data);
    this.loading.dismiss();
    const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
    this.base.shared.Alert.show_alert('Failed!', errorMessage);
  }

  getOtp() {
    this.phoneNumber = this.signupForm.value.mobileNumber;
    if (this.phoneNumber !== null && this.phoneNumber !== '') {
      if (this.phoneNumber.toString().length === 10) {
        this.loading.present();
        this.base.api.otpSend({phone_number: this.phoneNumber});
      } else {
        this.base.shared.Alert.show_alert('Failed!', ' Please enter 10 digit mobile number');
      }
    } else {
      this.base.shared.Alert.show_alert('Failed!', ' Please enter mobile number first ');
    }
  }

  login() {
    this.navCtrl.navigateRoot('/login');
  }

  doRegister() {
    if (!this.signupForm.valid) {
      this.base.shared.Alert.show_alert('Failed!', 'Please enter a valid details');
    } else {
      console.log('Form data', this.signupForm.value);
      this.base.api.register(this.signupForm.value);
    }
}

}
