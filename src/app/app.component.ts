import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sandbox';

  onTerm(term: string) {
    console.log('Inside app.component.html ', term);
  }
}
