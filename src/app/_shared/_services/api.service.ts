import { BaseApiService } from '../_classes/base-api.service';
import { Injectable } from '@angular/core';
import * as con from '../constant';


@Injectable()
export class ApiService extends BaseApiService {

  public otpSendUrlForRegister = con.API_URL + 'otp_send/register';
  public otpSendUrlForLogin = con.API_URL + 'otp_send/login';
  public registerUrl = con.API_URL + 'register';
  public loginWithOtpUrl = con.API_URL + 'loginWithOtp';
  public bannerUrl = con.API_URL + 'bannerList';
  public featureProductUrl = con.API_URL + 'featureProductList';
  public productUrl = con.API_URL + 'productList';
  public trendsProductUrl = con.API_URL + 'trendsProductList';
  public recentViewProductUrl = con.API_URL + 'recentViewProductList';
  public addToCartUrl = con.API_URL + 'add_to_cart';
  public cartListURL = con.API_URL + 'getCartList';

  public otpSend(params: any = {}) {
    this.genericApiCall(this.otpSendUrlForRegister, con.sendOTP, params, con.requestPost, true);
  }

  public otpSendForLogin(params: any = {}) {
    this.genericApiCall(this.otpSendUrlForLogin, con.sendOTP, params, con.requestPost, true);
  }

  public register(params: any = {}) {
    this.genericApiCall(this.registerUrl, con.register, params, con.requestPost, true);
  }

  public login(params: any = {}) {
    this.genericApiCall(this.loginWithOtpUrl, con.login, params, con.requestPost, true);
  }

  public banner(params: any = {}) {
    this.genericApiCall(this.bannerUrl, con.banner, params, con.requestPost, true);
  }

  public featureProductList(params: any = {}) {
    this.genericApiCall(this.featureProductUrl, con.featureProductList, params, con.requestPost, true);
  }

  public productList(params: any = {}) {
    this.genericApiCall(this.productUrl, con.productList, params, con.requestPost, true);
  }

  public trendsProductList(params: any = {}) {
    this.genericApiCall(this.trendsProductUrl, con.trendsProductList, params, con.requestPost, true);
  }

  public recentViewProductList(params: any = {}) {
    this.genericApiCall(this.recentViewProductUrl, con.recentViewProductList, params, con.requestPost, true);
  }

  public addToCart(params: any = {}) {
    this.genericApiCall(this.addToCartUrl, con.addToCart, params, con.requestPost, true);
  }

  public cartList(params: any = {}) {
    this.genericApiCall(this.cartListURL, con.cartList, params, con.requestPost, true);
  }
}
