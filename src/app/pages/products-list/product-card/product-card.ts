import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButton } from "../../../components/primary-button/primary-button";
import { Cart } from '../../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div class="bg-white shadow-md rounded-xl p-6 flex flex-col gap-6 relative">
      <div class="mx-auto">
        <img [src]="product().image" class="w-[200px] h-[100px] object-contain" />
        <div class="flex flex-col">
          <span class="text-md font-bold">{{ product().title }}</span><span class="text-md font-bold">{{ '$' + product().price }}</span>
          <app-primary-button label="Add to Cart" class="mt-3" (btnClicked)="cartService.addToCart(product())" />
        </div>
          <span class="absolute top-2 right-3 text-sm font-bold" [class]="product().stock ? 'text-green-600' : 'text-red-600'">
            @if (product().stock) {
              {{ product().stock }} left
            } @else {
              Out of Stock
            }
        </span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {

  cartService = inject(Cart);
  product = input.required<Product>();
}
