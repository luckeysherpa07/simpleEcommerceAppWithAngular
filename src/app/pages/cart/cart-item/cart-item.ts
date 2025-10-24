import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">
      
    </div>
  `,
  styles: ``,
})
export class CartItem {
  item = input.required<Product>();
}
