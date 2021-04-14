import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  viewMode: string = '';
  isMapActive: boolean = false;
  isListActive: boolean = false;

  constructor() {
    this.viewMode = 'map';
    this.isMapActive = true;
    this.isListActive = false;
  }

  ngOnInit(): void {}

  handleClick(val: string) {
    this.viewMode = val;
    switch (val) {
      case 'map':
        this.isMapActive = true;
        this.isListActive = false;
        break;
      case 'list':
        this.isMapActive = false;
        this.isListActive = true;
        break;
      default:
        this.isMapActive = true;
        this.isListActive = false;
        break;
    }
  }
}
