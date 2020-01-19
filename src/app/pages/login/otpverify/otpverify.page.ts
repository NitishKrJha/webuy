import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../../_shared/_classes/base.component';
import * as con from '../../../_shared/constant';
import { LoadingService } from '../../../_shared/loading.service';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.page.html',
  styleUrls: ['./otpverify.page.scss'],
})
export class OtpverifyPage extends BaseComponent implements OnInit {
  public loginForm: FormGroup;
  phoneNumber: any = '';
  otp: any = '';
  tagHide: any = true;
  qParams: any;
  cartLogin: any;
  cartItemId: any;
  cartItemTitle: any;
  cartItemPrice: any;
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
    this.route.queryParams.subscribe(params => {
      console.log('Params', this.router.getCurrentNavigation().extras.queryParams);
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.qParams = this.router.getCurrentNavigation().extras.queryParams;
        this.phoneNumber = this.qParams.phoneNumber;
      } else {
        this.base.shared.Alert.show_alert('Failed!', 'Data Not Found');
        this.router.navigate(['/login']);
      }
    });
  }

  handleApiResponse(data) {
    this.loading.dismiss();
    if (data.resultType === con.login) {
      const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Lstorage.setData('isLogged', 1);
      this.base.shared.Lstorage.setData('phoneNumber', data.result.data.phone);
      this.base.shared.Lstorage.setData('customerId', data.result.data.customer_id);
      this.base.shared.Lstorage.fetchData('cartLogin').then(cartLogin => {
        if (cartLogin) {
         this.cartLogin = cartLogin;
        }
      });
      this.base.shared.Lstorage.fetchData('cartItemId').then(cartItemId => {
        if (cartItemId) {
         this.cartItemId = cartItemId;
        }
      });
      this.base.shared.Lstorage.fetchData('cartItemTitle').then(cartItemTitle => {
        if (cartItemTitle) {
         this.cartItemTitle = cartItemTitle;
        }
      });
      this.base.shared.Lstorage.fetchData('cartItemPrice').then(cartItemPrice => {
        if (cartItemPrice) {
         this.cartItemPrice = cartItemPrice;
        }
      });
      if (this.cartLogin === 1) {
        this.base.shared.Lstorage.delData('cartLogin');
        this.base.shared.Lstorage.delData('cartItemId');
        this.base.shared.Lstorage.delData('cartItemTitle');
        this.base.shared.Lstorage.delData('cartItemPrice');
        this.base.api.addToCart({
          customer_id: data.result.data.customer_id,
          product_id: this.cartItemId,
          product_price: this.cartItemPrice,
          product_title: this.cartItemTitle,
          ip_address: '192.168.0.1'
        });
      } else {
        this.router.navigateByUrl('/home', { replaceUrl: true }) ;
      }
    } else if (data.resultType === con.addToCart) {
      const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Success', successMessage);
      this.router.navigateByUrl('/home', { replaceUrl: true }) ;
    }
  }

  handleApiResponseError(data) {
    console.log('data', data);
    this.loading.dismiss();
    if (data.resultType === con.login) {
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    } else if (data.resultType === con.addToCart) {
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
      this.router.navigateByUrl('/home', { replaceUrl: true }) ;
    }
  }

  verifyOtp() {
    if (this.phoneNumber !== null && this.phoneNumber !== '') {
      if (this.phoneNumber.length === 10) {
        this.loading.present();
        this.base.api.login({phone_number: this.phoneNumber,otp: this.otp});
      } else {
        this.base.shared.Alert.show_alert('Failed!', ' Please enter 10 digit mobile number');
      }
    } else {
      this.base.shared.Alert.show_alert('Failed!', ' Please enter mobile number first ');
    }
  }

}
