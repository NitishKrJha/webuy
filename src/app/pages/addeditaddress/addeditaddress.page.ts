import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-addeditaddress',
  templateUrl: './addeditaddress.page.html',
  styleUrls: ['./addeditaddress.page.scss'],
})
export class AddeditaddressPage extends BaseComponent implements OnInit  {
  public addForm: FormGroup;
  phoneNumber: any = '';
  tagHide: any = true;
  otpSend: any = '0';
  countryList: any = [];
  stateList: any = [];
  cityList: any = [];
  customerId: any = [];
  customer_id: any = [];
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
    
    this.addForm = formBuilder.group({
      full_name: ['', Validators.compose([Validators.required])],
      phone_number: ['', Validators.compose([Validators.required])],
      landmark: ['', Validators.compose([Validators.required])],
      address1: ['', Validators.compose([Validators.required])],
      address2: ['', Validators.compose([])],
      state: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      zipcode: ['', Validators.compose([Validators.required])],
      customer_id: [this.customer_id, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.base.api.stateList(101);
  }

  handleApiResponse(data) {
    if (data.resultType === con.addAddressList) {
      this.loading.dismiss();
      const successMessage = data.result && data.result.message ? data.result.message : 'Registration Successfully';
      this.base.shared.Alert.show_alert('Success', successMessage);
      this.navCtrl.navigateRoot('/address');
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
    if (data.resultType === con.addAddressList) {
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

  doSave() {
    this.loading.present();
    this.base.api.addAddressList(this.addForm.value);
  }

  selectState(event: any) {
    if (event.target.value) {
      this.base.api.cityList(event.target.value);
    }
  }

}
