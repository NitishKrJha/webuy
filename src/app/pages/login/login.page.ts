import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent implements OnInit  {
  public loginForm: FormGroup;
  phoneNumber: any = '';
  tagHide: any = true;
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
  }

  ngOnInit() {
  }

  register() {
    this.navCtrl.navigateRoot('/register');
  }

  onClickForgotPassword() {
  }

  handleApiResponse(data) {
    this.loading.dismiss();
    if (data.resultType === con.sendOTP) {
      const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      const navigationExtras: NavigationExtras = {
        queryParams: {
          phoneNumber : this.phoneNumber
        }
      };
      console.log('navigationExtras', navigationExtras);
      this.router.navigate(['/login/otpverify'], navigationExtras);
    }
  }

  handleApiResponseError(data) {
    console.log('data', data);
    this.loading.dismiss();
    if (data.resultType === con.sendOTP) {
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    }
  }

  sendOtp() {
    if (this.phoneNumber !== null && this.phoneNumber !== '') {
      if (this.phoneNumber.length === 10) {
        this.loading.present();
        this.base.api.otpSend({phone_number: this.phoneNumber});
      } else {
        this.base.shared.Alert.show_alert('Failed!', ' Please enter 10 digit mobile number');
      }
    } else {
      this.base.shared.Alert.show_alert('Failed!', ' Please enter mobile number first ');
    }
  }

}
