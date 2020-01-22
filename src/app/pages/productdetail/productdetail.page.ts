import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage extends BaseComponent implements OnInit {
  public productDetail: any = [];
  public qParams: any;
  public productId: any = '';
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
    this.route.queryParams.subscribe(params => {
      console.log('Params', this.router.getCurrentNavigation().extras.queryParams);
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.qParams = this.router.getCurrentNavigation().extras.queryParams;
        this.productId = this.qParams.productId;
        this.base.api.productDetail({product_id:this.productId});
      }
    });
  }

  handleApiResponse(data) {
    if (data.resultType === con.productDetail) {
      this.productDetail = data.result && data.result.data.detail ? data.result.data.detail : [];
    } else if (data.resultType === con.addToCart) {
      this.navCtrl.navigateRoot('/cart');
    }
  }

  handleApiResponseError(data) {
    if (data.resultType === con.productDetail) {
      this.productDetail = [];
    } else if (data.resultType === con.addToCart) {
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    }
  }

  addToCart(id: any = 0, title: any = '', price: any = '') {
    this.base.shared.Lstorage.fetchData('customerId').then(data => {
      if (data) {
        this.base.shared.Lstorage.delData('cartLogin');
        this.base.shared.Lstorage.delData('cartItemId');
        this.base.shared.Lstorage.delData('cartItemTitle');
        this.base.shared.Lstorage.delData('cartItemPrice');
        this.base.api.addToCart({
          customer_id: data,
          product_id: id,
          product_price: price,
          product_title: title,
          ip_address: '192.168.0.1'
        });
      } else {
        this.base.shared.Lstorage.setData('cartLogin', 1);
        this.base.shared.Lstorage.setData('cartItemId', id);
        this.base.shared.Lstorage.setData('cartItemTitle', title);
        this.base.shared.Lstorage.setData('cartItemPrice', price);
        this.navCtrl.navigateRoot('/login');
      }
    });
  }

}
