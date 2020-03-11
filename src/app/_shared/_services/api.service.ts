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
  public productDtlUrl = con.API_URL + 'productDetail';
  public trendsProductUrl = con.API_URL + 'trendsProductList';
  public recentViewProductUrl = con.API_URL + 'recentViewProductList';
  public addToCartUrl = con.API_URL + 'add_to_cart';
  public cartListURL = con.API_URL + 'getCartList';
  public categoryListURL = con.API_URL + 'allcategories';
  public removeCartItemURL = con.API_URL + 'removeCartItem';
  public updateCartItemURL = con.API_URL + 'updateCartItem';
  public productDetailURL = con.API_URL + 'productDetail';
  public countryListURL = con.API_URL + 'countryList';
  public stateListURL = con.API_URL + 'stateList';
  public cityListURL = con.API_URL + 'cityList';
  public shippingAddressListUrl = con.API_URL + 'shippingAddressList';
  public deleteShippingAddressUrl = con.API_URL + 'deleteShippingAddress';
  public setDefaultShippingAddressUrl = con.API_URL + 'setDefaultShippingAddress';
  public addEditShippingAddressUrl = con.API_URL + 'addEditShippingAddress';

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

  public productDtl(params: any = {}) {
    this.genericApiCall(this.productDtlUrl, con.productDetail, params, con.requestPost, true);
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

  public buyNow(params: any = {}) {
    this.genericApiCall(this.addToCartUrl, con.buyNow, params, con.requestPost, true);
  }

  public cartList(params: any = {}) {
    this.genericApiCall(this.cartListURL, con.cartList, params, con.requestPost, true);
  }

  public categoryList(params: any = {}) {
    this.genericApiCall(this.categoryListURL, con.categoryList, params, con.requestPost, true);
  }

  public removeCartItem(params: any = {}) {
    this.genericApiCall(this.removeCartItemURL, con.removeCartItem, params, con.requestPost, true);
  }

  public updateCartItem(params: any = {}) {
    this.genericApiCall(this.updateCartItemURL, con.updateCartItem, params, con.requestPost, true);
  }

  public productDetail(params: any = {}) {
    this.genericApiCall(this.productDetailURL, con.productDetail, params, con.requestPost, true);
  }

  public cityList(id: any) {
    this.genericApiCall(this.cityListURL + '/' + id, con.cityList, {}, con.requestPost, true);
  }

  public stateList(id: any) {
    this.genericApiCall(this.stateListURL  + '/' + id, con.stateList, {}, con.requestPost, true);
  }

  public countryList() {
    this.genericApiCall(this.countryListURL, con.countryList, {}, con.requestPost, true);
  }

  public addressList() {
    this.genericApiCall(this.shippingAddressListUrl, con.addressList, {}, con.requestPost, true);
  }

  public addAddressList() {
    this.genericApiCall(this.addEditShippingAddressUrl, con.addAddressList, {}, con.requestPost, true);
  }

  public updateAddressList() {
    this.genericApiCall(this.addEditShippingAddressUrl, con.updateAddressList, {}, con.requestPost, true);
  }

  public removeAddressList() {
    this.genericApiCall(this.deleteShippingAddressUrl, con.removeAddressList, {}, con.requestPost, true);
  }

  public setDefualtAddress() {
    this.genericApiCall(this.setDefaultShippingAddressUrl, con.setDefualtAddress, {}, con.requestPost, true);
  }
}
