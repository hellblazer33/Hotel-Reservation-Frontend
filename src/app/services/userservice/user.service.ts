import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';  //
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token")
  }

  userRegister(data: any) {
    let header = {
      headers: new HttpHeaders({    //
        'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair
      })
    }
    return this.httpService.postService('user/register', data, false, header)
  }

  userSignin(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(`user/login?email=${data.email}&password=${data.password}`, data, false, header)
  }

    adminSignin(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(`admin/login?email=${data.email}&password=${data.password}`, data, false, header)
  }

  userforgotemail(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('user/forgotemail', data, false, header)
  }
  encode(data: any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  // userforgotpassword( data:any){


  //   let header={
  //     headers:new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Authorization':this.token
  //     })
  //   }

  //     return  this.httpService.postService('user/reset-password' , this.encode(data), true, header )


  // }
  Reset(payload: any, token: any){

    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+token
      })
    }
    return this.httpService.putService('user/resetpassword',this.encode(payload),true,header);
  }
}
