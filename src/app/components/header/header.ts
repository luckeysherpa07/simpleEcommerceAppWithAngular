import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <p class="bg-slate-100 px-4 py-3 shadow-md">
      {{ title() }}
    </p>
  `,
  styles: `

  `,
})
export class Header {
  title = signal('angular-ecommerce');
}
