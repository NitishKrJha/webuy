import { BaseApiService } from '../_classes/base-api.service';
import { Injectable } from '@angular/core';
import * as con from '../constant';


@Injectable()
export class ApiService extends BaseApiService {

  public otpSendUrlForRegister = con.API_URL + 'otp_send/register';
  public registerUrl = con.API_URL + 'register';
  public loginWithOtpUrl = con.API_URL + 'loginWithOtp';

  public otpSend(params: any = {}) {
    this.genericApiCall(this.otpSendUrlForRegister, con.sendOTP, params, con.requestPost, true);
  }

  public register(params: any = {}) {
    this.genericApiCall(this.registerUrl, con.register, params, con.requestPost, true);
  }

  public login(params: any = {}) {
    this.genericApiCall(this.loginWithOtpUrl, con.login, params, con.requestPost, true);
  }
}
