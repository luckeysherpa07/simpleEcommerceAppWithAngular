import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="handleButtonClick()">
      {{label()}}
    </button>
  `,
  styles: ``,
})
export class PrimaryButton {
  label = input('Click Me');

  handleButtonClick() {
    console.log('Primary button clicked!');
  }
}
