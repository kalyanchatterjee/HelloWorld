import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Wikipost } from '../wikipost';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private httpClient: HttpClient) {}

  // How does a generic fuction look like?
  /* 
  function storeGenericValue<T>(value: T): [T] {
    return [value]
  }
*/

  // https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=space&format=json&origin=*
  getPosts(term: string): Observable<Wikipost[]> {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&format=json&origin=*`;
    return this.httpClient.get<Wikipost[]>(url);
  }
}
