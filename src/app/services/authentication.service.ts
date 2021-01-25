import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getBearerToken(){
    var settings = {
      "url": "http://interview.agileengine.com:80/auth",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({"apiKey":"23567b218376f79d9415"}),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  renewToken(){

  }

}
