import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(60),
      // Don't allow space
      // Validators.pattern(/^\S*$/),
    ]),
  });
  // Workaround - create a variable and cast as FormControl
  nameControl = this.cardForm.get('name') as FormControl;

  constructor() {}

  ngOnInit(): void {}
}
