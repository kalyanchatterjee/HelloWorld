import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../../date-form-control';

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
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern(/[0-9]/),
    ]),
    // expiration: new FormControl('', [
    //   Validators.required,
    //   Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    // ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });
  // Workaround - create a variable and cast as FormControl
  nameControl = this.cardForm.get('name') as FormControl;
  cardNumberControl = this.cardForm.get('cardNumber') as FormControl;
  expirationControl = this.cardForm.get('expiration') as FormControl;
  securityCodeControl = this.cardForm.get('securityCode') as FormControl;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Submitted');
  }

  onResetClick() {
    this.cardForm.reset();
  }
}
