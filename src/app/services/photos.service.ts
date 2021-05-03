import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../photo';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private httpClient: HttpClient) {}

  getRandomPhoto(): Observable<Photo> {
    const url =
      'https://api.unsplash.com/photos/?client_id=z9YfG0cmEdUZ1Zh-vsJv9REPWEo0MhcTqnx4g7Bref8';

    return this.httpClient.get<Photo>(url, {
      params: {
        client_id: 'z9YfG0cmEdUZ1Zh-vsJv9REPWEo0MhcTqnx4g7Bref8',
      },
    });
  }
}
