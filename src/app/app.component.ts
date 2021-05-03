import { Component } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';
import { Wikipost } from './wikipost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sandbox';
  posts: Wikipost[];

  constructor(private wikiservice: WikipediaService) {
    this.posts = [];
  }

  onTerm(term: string) {
    this.wikiservice.getPosts(term).subscribe((pages) => {
      console.log(pages);
      this.posts = pages;
    });
  }
}
