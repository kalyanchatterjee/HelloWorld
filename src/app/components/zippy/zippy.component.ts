import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent implements OnInit {
  viewMode: string;
  isSDSelected: boolean;
  isBDSelected: boolean;

  constructor() {
    this.viewMode = '';
    this.isBDSelected = false;
    this.isSDSelected = false;
  }

  handleClick(value: string) {
    if (this.viewMode === '') {
      this.viewMode = value;
      if (value === 'shipping') {
        this.isSDSelected = true;
      } else {
        this.isBDSelected = true;
      }
    } else {
      this.viewMode = '';
      this.isBDSelected = false;
      this.isSDSelected = false;
    }
  }

  ngOnInit(): void {}
}
