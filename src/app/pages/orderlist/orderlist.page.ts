import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.page.html',
  styleUrls: ['./orderlist.page.scss'],
})
export class OrderlistPage extends BaseComponent implements OnInit {
  customerId: any = 0;
  phoneNumber: any = '';
  orderList: any = [];
  orderCount: any = 0;
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
        this.getOrderList();
      }
    });
  }

  getOrderList() {
    this.loading.present();
    this.base.api.orderList({ip_address: '192.168.0.1', customer_id: this.customerId});
  }

  handleApiResponse(data) {
    if (data.resultType === con.orderList) {
      this.loading.dismiss();
      this.orderList = data.result && data.result.data.orders ? data.result.data.orders : [];
      this.orderCount = data.result && data.result.data.total ? data.result.data.total : 0;
    }
  }

  handleApiResponseError(data) {
    this.loading.dismiss();
    console.log('data', data);
    if (data.resultType === con.cartList) {
      this.orderList = [];
      this.orderCount = 0;
    }
  }

  goToCartDtl(id, prId) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        orderId : id,
        productId : prId
      }
    };
    this.router.navigate(['/orderdetail'], navigationExtras);
  }

}
