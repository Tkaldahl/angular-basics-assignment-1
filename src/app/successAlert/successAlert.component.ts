import {Component} from '@angular/core';

@Component({
  selector: '[successAlert]',
  template: `
      <p class="success">Success!</p>
  `,
  styles: [`
  .success {
      color: green
  }
  `]
})
export class SuccessAlertComponent {

}
