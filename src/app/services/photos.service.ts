import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private authService: AuthenticationService) { }

  getPaginatedPhotos(page = 1): Photo[]{
    const url = "http://interview.agileengine.com:80/images?page="+page;
    var settings = {
      "url": "http://interview.agileengine.com:80/images",
      "method": "GET",
      "timeout": 0,
      "Access-Control-Allow-Headers": "*",
      "headers": {
        "Authorization": "Bearer 075516002d5a8ab754707eb1bd1fa726582638bd"
      },
    };

    $.ajax(settings).done(function (response) {
      // #TODO: If the answer has the token error
      // this.authService.renewToken();
      console.log(response);
      return response;
    });
  }

  getPhotoById(id){
    const url = "http://interview.agileengine.com:80/images/"+id;
    var settings = {
      "url": url,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "Bearer 075516002d5a8ab754707eb1bd1fa726582638bd"
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  // Do photos change?
  savePhotoOnLocalStorage(){

  }

  // #TODO: Implement save data for paginated photos
  savePageOnLocalStorage(){}
}
