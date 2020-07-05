import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.page.html',
  styleUrls: ['./orderdetail.page.scss'],
})
export class OrderdetailPage extends BaseComponent implements OnInit {
  customerId: any = '';
  orderId: any = 0;
  public qParams: any;
  orderDetails: any = [];
  prId: any = 0;
  shippingAddress: any = [];
  shipAddr: any = '';
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
      }
    });
    this.route.queryParams.subscribe(params => {
      console.log('Params', this.router.getCurrentNavigation().extras.queryParams);
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.qParams = this.router.getCurrentNavigation().extras.queryParams;
        this.orderId = this.qParams.orderId;
        this.prId = this.qParams.productId;
        this.getOrderDetail(this.orderId, this.prId);
      } else {
        this.navCtrl.navigateRoot('/orderlist');
      }
    });
  }

  handleApiResponse(data) {
    if (data.resultType === con.orderDetails) {
      this.loading.dismiss();
      this.orderDetails = data.result && data.result.data ? data.result.data : [];
      this.shippingAddress = this.orderDetails.shipping_address;
      this.shipAddr = '';
      this.shipAddr += this.shippingAddress.address;
      if (this.shippingAddress.address2 && this.shippingAddress.address2 !== '') {
        this.shipAddr += ' ' + this.shippingAddress.address2;
      }
      this.shipAddr += ' ' + this.shippingAddress.city;
      this.shipAddr += ' ' + this.shippingAddress.state;
      this.shipAddr += ' Near At: ' + this.shippingAddress.landmark;
      this.shipAddr += ' Zipcode ' + this.shippingAddress.zipcode;
    }
  }

  handleApiResponseError(data) {
    this.loading.dismiss();
    console.log('data', data);
    if (data.resultType === con.orderDetails) {
      this.orderDetails = [];
    }
  }

  getOrderDetail(id, prId) {
    this.loading.present();
    this.base.api.orderDetails({
      order_id: id,
      product_id: prId,
      ip_address: '192.168.0.1'
    });
  }

}
