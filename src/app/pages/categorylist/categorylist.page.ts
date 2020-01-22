import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, Events } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { BaseComponent } from '../../_shared/_classes/base.component';
import * as con from '../../_shared/constant';
import { LoadingService } from '../../_shared/loading.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.page.html',
  styleUrls: ['./categorylist.page.scss'],
})
export class CategorylistPage extends BaseComponent implements OnInit {
  public categoryList: any = [];
  public imgPath: any = 'https://minisoftsolution.com/webuy/uploads/category/';
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
    this.base.api.categoryList({});
  }

  handleApiResponse(data) {
    if (data.resultType === con.categoryList) {
      this.categoryList = data.result && data.result.data ? data.result.data : [];
    }
  }

  handleApiResponseError(data) {
    console.log('data', data);
    if (data.resultType === con.categoryList) {
      this.categoryList = [];
    }
  }

  viewImg(name: any) {
    this.router.navigateByUrl('/productlist');
  }

}
