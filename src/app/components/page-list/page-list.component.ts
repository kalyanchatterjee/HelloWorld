import { Component, OnInit, Input } from '@angular/core';
import { Wikipost } from '../../wikipost';

@Component({
  selector: 'page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() posts: Wikipost[];

  constructor() {
    this.posts = [];
  }

  ngOnInit(): void {}
}
