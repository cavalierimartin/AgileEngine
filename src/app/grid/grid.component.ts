import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { PhotosService } from '../services/photos.service';
import { MatGridList } from '@angular/material/grid-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  dataLoaded = false;
  // #TODO: Set and import Photo interface;
  $images: Observable<[Photo]>;

  constructor(private auth: AuthenticationService, private photosService: PhotosService) { }

  ngOnInit() {
    this.auth.getBearerToken();
    this.loadPhotos();
  }

  loadPhotos(){
    this.$photos = this.photosService.getPaginatedPhotos();
  }

  ngAfterContentInit(){

  }

  showPhoto(){

  }

}
