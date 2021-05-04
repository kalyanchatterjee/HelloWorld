import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'random-photos',
  templateUrl: './random-photos.component.html',
  styleUrls: ['./random-photos.component.css'],
})
export class RandomPhotosComponent implements OnInit {
  imageSource: string;
  constructor(private photoService: PhotosService) {
    this.imageSource = '';
  }

  ngOnInit(): void {
    this.getRandomImage();
  }

  getRandomImage() {
    this.photoService.getRandomPhoto().subscribe((data) => {
      this.imageSource = data.urls.regular;
    });
  }
}
