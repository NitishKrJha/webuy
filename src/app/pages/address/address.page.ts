import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage extends BaseComponent implements OnInit {
  public addressList: any = [];
  customerId: any = 0;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public platform: Platform,
    public events: Events,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    private route: ActivatedRoute,
    public loading: LoadingService,
    injector: Injector
  ) {
    super(injector);
    this.initBaseComponent();
  }

  ngOnInit() {
    this.base.shared.Lstorage.fetchData('customerId').then(data => {
      if (data) {
        this.customerId = data;
        this.loading.present();
        this.getaddressList();
      }
    });
  }

  getaddressList() {
    this.base.api.addressList({ip_address: '192.168.0.1', customer_id: this.customerId});
  }

  handleApiResponse(data) {
    if (data.resultType === con.addressList) {
      this.loading.dismiss();
      this.addressList = data.result && data.result.data ? data.result.data : [];
    } else if (data.resultType === con.removeAddressList) {
      this.loading.dismiss();
      this.getaddressList();
      const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Success', successMessage);
    } else if (data.resultType === con.setDefualtAddress) {
      this.loading.dismiss();
      this.getaddressList();
      const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Success', successMessage);
    }
  }

  handleApiResponseError(data) {
    this.loading.dismiss();
    console.log('data', data);
    if (data.resultType === con.addressList) {
      this.addressList = [];
    } else if (data.resultType === con.removeAddressList) {
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    } else if (data.resultType === con.setDefualtAddress) {
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    }
  }

  delAddrees(id: any) {
    this.loading.present();
    this.base.api.removeAddressList({
      customer_id: this.customerId,
      address_id: id,
      ip_address: '192.168.0.1'
    });
  }

  setDefaultAddrees(id: any) {
    this.loading.present();
    this.base.api.setDefaultAddrees({
      customer_id: this.customerId,
      address_id: id,
      ip_address: '192.168.0.1'
    });
  }

  addAddress() {
    this.navCtrl.navigateRoot('/addeditaddress');
  }
}
