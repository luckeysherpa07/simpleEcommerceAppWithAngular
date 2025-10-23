import { Component, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
      <span>My Store</span>
      <app-primary-button label="Cart" />
    </div>
  `,
  styles: `

  `,
})
export class Header {
}
