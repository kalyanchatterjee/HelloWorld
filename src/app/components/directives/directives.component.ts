import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  courses: string[] = ['Algebra 101', 'Calculus 101'];

  constructor() {}

  ngOnInit(): void {}
}
