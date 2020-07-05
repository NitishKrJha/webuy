import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage extends BaseComponent implements OnInit {
  public cartList: any = [];
  public defaultAddress: any = [];
  customerId: any = 0;
  addressId: any = 0;
  phoneNumber: any = '';
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
        this.getCartList();
      }
    });
    this.base.shared.Lstorage.fetchData('phoneNumber').then(data => {
      if (data) {
        this.phoneNumber = data;
      }
    });
  }

  getCartList() {
    this.base.api.cartList({ip_address: '192.168.0.1', customer_id: this.customerId});
  }

  handleApiResponse(data) {
    if (data.resultType === con.cartList) {
      this.loading.dismiss();
      this.cartList = data.result && data.result.data ? data.result.data : [];
      this.defaultAddress = data.result && data.result.defaultAddress ? data.result.defaultAddress : [];
      this.addressId = data.result && data.result.defaultAddress.address_id ? data.result.defaultAddress.address_id : 0;
    } else if (data.resultType === con.removeCartItem) {
      this.getCartList();
      const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Success', successMessage);
    } else if (data.resultType === con.updateCartItem) {
      this.getCartList();
      const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Success', successMessage);
    } else if (data.resultType === con.placeOrder) {
      this.getCartList();
      const successMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Success', successMessage);
    }
  }

  handleApiResponseError(data) {
    this.loading.dismiss();
    console.log('data', data);
    if (data.resultType === con.cartList) {
      this.cartList = [];
      this.defaultAddress = [];
    } else if (data.resultType === con.removeCartItem) {
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    } else if (data.resultType === con.updateCartItem) {
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    } else if (data.resultType === con.placeOrder) {
      this.getCartList();
      const errorMessage = data.result && data.result.message ? data.result.message : 'something went wrong';
      this.base.shared.Alert.show_alert('Failed!', errorMessage);
    }
  }

  quantityDecreased(id: any, qty: any) {
    this.loading.present();
    const qtys = ((Number(qty) - 1) > 0) ? (Number(qty) - 1) : 0;
    this.base.api.updateCartItem({
      customer_id: this.customerId,
      cart_item_id: id,
      ip_address: '192.168.0.1',
      qty: qtys
    });
  }

  quantityIncreased(id: any, qty: any) {
    this.loading.present();
    this.base.api.updateCartItem({
      customer_id: this.customerId,
      cart_item_id: id,
      ip_address: '192.168.0.1',
      qty: Number(qty) + 1
    });
  }

  removeCart(id: any) {
    this.loading.present();
    this.base.api.removeCartItem({
      customer_id: this.customerId,
      cart_item_id: id,
      ip_address: '192.168.0.1'
    });
  }

  placeOrder(id: any) {
    if (this.addressId === 0) {
      this.base.shared.Alert.show_alert('Error', 'Set Default Address First');
    } else {
      this.loading.present();
      this.base.api.placeOrder({
        customer_id: this.customerId,
        shipping_address: this.addressId,
        phone: this.phoneNumber,
        amount: this.cartList.reduce((i, j) => i + j.sale_price * j.qty, 0),
        payment_method: 'Cash',
        ip_address: '192.168.0.1'
      });
    }
  }

  getTotal() {
    return this.cartList.reduce((i, j) => i + j.sale_price * j.qty, 0);
  }

  changeAddress() {
    this.base.shared.Lstorage.setData('addressForCart', 1);
    this.navCtrl.navigateRoot('/address');
  }

}
