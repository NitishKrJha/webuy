import { Component, Injector , ViewChildren, QueryList} from '@angular/core';

import {
  Platform,
  NavController,
  ModalController,
  ActionSheetController,
  PopoverController,
  MenuController,
  IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';

import { Pages } from './interfaces/pages';
import { BaseComponent } from './_shared/_classes/base.component';
import { LoadingService } from './_shared/loading.service';
import * as con from './_shared/constant';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent extends BaseComponent {
  customerId: any = 0 ;
  public appPages: Array<Pages>;
  cartLogin: any;
  cartItemId: any;
  cartItemTitle: any;
  cartItemPrice: any;
  isLogged: any;

  constructor(
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public navCtrl: NavController,
    public network: Network,
    public modalCtrl: ModalController,
    public loading: LoadingService,
    public menu: MenuController,
    public actionSheetCtrl: ActionSheetController,
    public popoverCtrl: PopoverController,
    injector: Injector
  ) {
    super(injector);
    this.initializeApp();
    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Category',
        url: '/categorylist',
        icon: 'list'
      },
      {
        title: 'Item',
        url: '/productlist',
        icon: 'list'
      },
      {
        title: 'Cart',
        url: '/cart',
        icon: 'list'
      }
    ];
    this.base.shared.Lstorage.fetchData('customerId').then(datas => {
      this.customerId = datas;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  login() {
    this.router.navigateByUrl('/login', { replaceUrl: true }) ;
  }

  logout() {
    this.base.shared.Lstorage.delData('cartLogin');
    this.base.shared.Lstorage.delData('cartItemId');
    this.base.shared.Lstorage.delData('cartItemTitle');
    this.base.shared.Lstorage.delData('cartItemPrice');
    this.base.shared.Lstorage.delData('isLogged');
    this.base.shared.Lstorage.delData('customerId');
    this.router.navigateByUrl('/login', { replaceUrl: true }) ;
  }
}
