import { Component, OnInit } from '@angular/core';
import {
  NavController,
  LoadingController,
  Platform,
  AlertController,
  Events
} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.page.html',
  styleUrls: ['./categorylist.page.scss'],
})
export class CategorylistPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public platform: Platform,
    public events: Events,
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewImg(name: any) {
    this.router.navigateByUrl('/productlist');
  }

}
