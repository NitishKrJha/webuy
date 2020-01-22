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
  countryList: any = [];
  stateList: any = [];
  cityList: any = [];
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
      phoneNumber: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      address1: ['', Validators.compose([Validators.required])],
      address2: ['', Validators.compose([])],
      state: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      pincode: ['', Validators.compose([Validators.required])],
      profession: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.base.api.stateList(101);
  }

  handleApiResponse(data) {
    if (data.resultType === con.sendOTP) {
      this.loading.dismiss();
      const successMessage = data.result && data.result.message ? data.result.message : 'OTP send successully';
      if (data.result.status === true) {
        this.signupForm = this.formBuilder.group({
          email: [this.signupForm.value.email, Validators.compose([Validators.required, Validators.email])],
          name: [this.signupForm.value.name, Validators.compose([Validators.required])],
          phoneNumber: [this.signupForm.value.phoneNumber, Validators.compose([Validators.required])],
          gender: [this.signupForm.value.gender, Validators.compose([Validators.required])],
          dob: [this.signupForm.value.dob, Validators.compose([Validators.required])],
          address1: [this.signupForm.value.address1, Validators.compose([Validators.required])],
          address2: [this.signupForm.value.address2, Validators.compose([])],
          state: [this.signupForm.value.state, Validators.compose([Validators.required])],
          city: [this.signupForm.value.city, Validators.compose([Validators.required])],
          pincode: [this.signupForm.value.pincode, Validators.compose([Validators.required])],
          profession: [this.signupForm.value.profession, Validators.compose([Validators.required])],
          otp: ['', Validators.compose([Validators.required])]
        });
        this.otpSend = '1';
      }
      this.base.shared.Alert.show_alert('Success', successMessage);
    } else if (data.resultType === con.register) {
      this.loading.dismiss();
      const successMessage = data.result && data.result.message ? data.result.message : 'Registration Successfully';
      this.base.shared.Alert.show_alert('Success', successMessage);
    } else if (data.resultType === con.countryList) {
      this.countryList = data.result && data.result.data ? data.result.data : [];
    } else if (data.resultType === con.stateList) {
      this.stateList = data.result && data.result.data ? data.result.data : [];
    } else if (data.resultType === con.cityList) {
      this.cityList = data.result && data.result.data ? data.result.data : [];
    }
  }

  handleApiResponseError(data) {
    console.log('data', data);
    if (data.resultType === con.sendOTP) {
      this.loading.dismiss();
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    } else if (data.resultType === con.register) {
      this.loading.dismiss();
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    } else if (data.resultType === con.countryList) {
      this.countryList = [];
    } else if (data.resultType === con.stateList) {
      this.stateList = [];
    } else if (data.resultType === con.cityList) {
      this.cityList = [];
    }
  }

  getOtp() {
    this.phoneNumber = this.signupForm.value.phoneNumber;
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
    if (this.otpSend === '1') {
      if (!this.signupForm.valid) {
        this.base.shared.Alert.show_alert('Failed!', 'Please enter a valid details');
      } else {
        this.loading.present();
        this.base.api.register(this.signupForm.value);
      }
    } else {
      this.base.shared.Alert.show_alert('Failed!', 'Mobile Number is not verified yet');
    }
  }

  selectState(event: any) {
    if (event.target.value) {
      this.base.api.cityList(event.target.value);
    }
  }

}
