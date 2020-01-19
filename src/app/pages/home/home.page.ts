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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public platform: Platform,
    public events: Events,
    private router: Router
  ) {}

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


  viewAll() {
    this.router.navigateByUrl('/productlist');
  }
}
