import { Component, OnInit, Input, ɵmarkDirty } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control = new FormControl('');
  @Input() label: string = '';
  @Input() placeholder: string = '';

  constructor() {}

  ngOnInit(): void {}
}
