import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.page.html',
  styleUrls: ['./pro-details.page.scss'],
})
export class ProDetailsPage extends BaseComponent implements OnInit {
  slidePerViewOpts = {
  };
  public productList: any = [];
  public qParams: any;
  public prId: any = '';
  public productId: any = '';
  public itemId: any = '';
  public title: any = '';
  public description: any = '';
  public specification: any = '';
  public salePrice: any = '';
  public purchasePrice: any = '';
  public gst: any = '';
  public shippingCost: any = '';
  public imagePath: any = '';
  public imgList: any = [];

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
        this.prId = this.qParams.prId;
        this.loading.present();
        this.base.api.productDtl({product_id: this.prId, ip_address: '192.168.0.1'});
      } else {
        this.navCtrl.navigateRoot('/productlist');
      }
    });
  }

  handleApiResponse(data) {
    if (data.resultType === con.productDetail) {
      this.productList = data.result && data.result.data ? data.result.data : [];
      this.itemId = this.productList.item_id;
      this.title = this.productList.title;
      this.description = this.productList.description;
      this.specification = this.productList.specification;
      this.salePrice = this.productList.sale_price;
      this.purchasePrice = this.productList.purchase_price;
      this.gst = this.productList.gst;
      this.shippingCost = this.productList.shipping_cost;
      this.imagePath = this.productList.image_path;
      this.imgList = this.productList.img_list;
      this.loading.dismiss();
    } else if (data.resultType === con.addToCart) {
      this.loading.dismiss();
      const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Success', successMessage);
    } else if (data.resultType === con.buyNow) {
      this.navCtrl.navigateRoot('/cart');
    } else {
      this.loading.dismiss();
      const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
    }
  }

  handleApiResponseError(data) {
    if (data.resultType === con.productDetail) {
      this.loading.dismiss();
      this.productList = [];
    } else if (data.resultType === con.buyNow) {
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    } else if (data.resultType === con.addToCart) {
      this.loading.dismiss();
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    } else {
      this.loading.dismiss();
      this.productList = [];
      this.base.shared.Alert.show_alert('Failed!', 'Technicle Issue');
    }
  }

  addToCart(id: any = 0, title: any = '', price: any = '') {
    this.base.shared.Lstorage.fetchData('customerId').then(data => {
      if (data) {
        this.loading.present();
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

  buyNow(id: any = 0, title: any = '', price: any = '') {
    this.base.shared.Lstorage.fetchData('customerId').then(data => {
      if (data) {
        this.base.shared.Lstorage.delData('cartLogin');
        this.base.shared.Lstorage.delData('cartItemId');
        this.base.shared.Lstorage.delData('cartItemTitle');
        this.base.shared.Lstorage.delData('cartItemPrice');
        this.base.api.buyNow({
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
