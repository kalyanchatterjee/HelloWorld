import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css'],
})
export class CommentsFormComponent implements OnInit {
  firstName: string;
  constructor() {
    this.firstName = '';
  }

  ngOnInit(): void {}

  makeComment(value: NgForm) {
    console.log(value);
  }
}
