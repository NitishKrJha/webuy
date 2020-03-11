import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage extends BaseComponent implements OnInit {
  public bannerList: any = [];
  public featureProductList: any = [];
  public productList: any = [];
  public trendsProductList: any = [];
  public recentViewProductList: any = [];
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

  slideSloganOpts = {
    initialSlide: 1,
  };

  slidePerViewOpts = {
      speed: 1000,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 500,
    },
      slidesPerView: 3,
  };

  slideThumbOpts = {
      speed: 1000,
      spaceBetween: 16,
  };

  slideThinOpts = {
      speed: 1000,
      loop: true,
      slidesPerView: 4,
  };

  slideFreedomOpts = {
      speed: 1000,
      spaceBetween: 16,
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
  };

  slideCenterOpts = {
      speed: 1000,
      spaceBetween: 16,
      loop: true,
      slidesPerView: 3,
  };

  slideSideOpts = {
      speed: 1000,
      spaceBetween: 16,
      loop: true,
      slidesPerView: 3,
  };

  ngOnInit() {
    this.base.api.banner({});
    this.base.api.recentViewProductList({});
    this.base.api.trendsProductList({});
    this.base.api.featureProductList({});
    this.base.api.productList({});
  }

  handleApiResponse(data) {
    if (data.resultType === con.banner) {
      this.bannerList = data.result && data.result.message ? data.result.data : [];
      console.log('bannerList', this.bannerList);
    } else if (data.resultType === con.recentViewProductList) {
      this.recentViewProductList = data.result && data.result.data.detail ? data.result.data.detail : [];
      console.log('recentViewProductList', this.recentViewProductList);
    } else if (data.resultType === con.trendsProductList) {
      this.trendsProductList = data.result && data.result.data.detail ? data.result.data.detail : [];
      console.log('trendsProductList', this.trendsProductList);
    } else if (data.resultType === con.featureProductList) {
      this.featureProductList = data.result && data.result.data.detail ? data.result.data.detail : [];
      console.log('featureProductList', this.featureProductList);
    } else if (data.resultType === con.productList) {
      this.productList = data.result && data.result.data.detail ? data.result.data.detail : [];
      console.log('productList', this.productList);
    }
  }

  handleApiResponseError(data) {
    console.log('data', data);
    if (data.resultType === con.banner) {
      this.bannerList = [];
    } else if (data.resultType === con.recentViewProductList) {
      this.recentViewProductList = [];
      console.log('recentViewProductList', this.recentViewProductList);
    } else if (data.resultType === con.trendsProductList) {
      this.trendsProductList = [];
      console.log('trendsProductList', this.trendsProductList);
    } else if (data.resultType === con.featureProductList) {
      this.featureProductList = [];
      console.log('featureProductList', this.featureProductList);
    } else if (data.resultType === con.productList) {
      this.productList = [];
      console.log('productList', this.productList);
    }
  }


  viewAll(type: any= '') {
    this.router.navigateByUrl('/productlist');
    const navigationExtras: NavigationExtras = {
      queryParams: {
        pageType : type
      }
    };
    this.router.navigate(['/productlist'], navigationExtras);
  }

  viewPr(id: any = '') {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        prId : id
      }
    };
    this.router.navigate(['/pro-details'], navigationExtras);
  }
}
