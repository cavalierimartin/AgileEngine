import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(private photoService: PhotosService, private actRoute: ActivatedRoute) { }

  loaded = false;

  ngOnInit() {
    const idPhoto = this.actRoute.snapshot.params['id']
    this.photoService.getPhotoById(idPhoto);
    // Set loaded true on right response; Show errors if exists;
  }

}
