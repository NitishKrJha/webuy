import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage extends BaseComponent implements OnInit {
  public productList: any = [];
  public qParams: any;
  public pageType: any = '';
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
        this.pageType = this.qParams.pageType;
        if (this.pageType === 'recentViewProductList') {
          this.base.api.recentViewProductList({});
        } else if (this.pageType === 'trendsProductList') {
          this.base.api.trendsProductList({});
        } else if (this.pageType === 'featureProductList') {
          this.base.api.featureProductList({});
        } else if (this.pageType === 'productList') {
          this.base.api.productList({});
        }
      } else {
        this.base.shared.Alert.show_alert('Failed!', 'Data Not Found');
        this.router.navigate(['/home']);
      }
    });
  }

  handleApiResponse(data) {
    if (data.resultType === con.recentViewProductList) {
      this.productList = data.result && data.result.data.detail ? data.result.data.detail : [];
    } else if (data.resultType === con.trendsProductList) {
      this.productList = data.result && data.result.data.detail ? data.result.data.detail : [];
    } else if (data.resultType === con.featureProductList) {
      this.productList = data.result && data.result.data.detail ? data.result.data.detail : [];
    } else if (data.resultType === con.productList) {
      this.productList = data.result && data.result.data.detail ? data.result.data.detail : [];
    }
  }

  handleApiResponseError(data) {
     if (data.resultType === con.recentViewProductList) {
      this.productList = [];
    } else if (data.resultType === con.trendsProductList) {
      this.productList = [];
    } else if (data.resultType === con.featureProductList) {
      this.productList = [];
    } else if (data.resultType === con.productList) {
      this.productList = [];
    }
  }

  addToCart(id: any = 0) {
    alert(id);
  }

}
