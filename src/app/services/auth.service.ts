import { Injectable } from '@angular/core';
import AppID from 'ibmcloud-appid-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private appId;
  private accessToken: string;

  constructor() {
    this.appId = new AppID();
    this.initClient().then(() => console.log('initialized AuthService.'));
  }

  private async initClient() {
    await this.appId.init({
      clientId: '081efa11-e13a-4a1c-8d92-c4e58c3e8643',
      discoveryEndpoint:"https://au-syd.appid.cloud.ibm.com/oauth/v4/69f96916-66d9-47e9-8c08-f30a958d5e47/.well-known/openid-configuration"
    });
  }

  get isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  async signIn() {
    const { accessToken } = await this.appId.signin();
    this.accessToken = accessToken;
  }

  async getUserInfo() {
    return await this.appId.getUserInfo(this.accessToken);
  }

}