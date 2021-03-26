import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    // Note: This returns an Observable
    return this.httpClient.get<Post[]>('http://localhost:3000/posts');
  }

  createPost(reqBody: Post) {
    return this.httpClient.post('http://localhost:3000/posts', reqBody);
  }
}
