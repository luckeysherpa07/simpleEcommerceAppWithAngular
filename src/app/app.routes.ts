import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { Cart } from './services/cart';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: ProductsList
},
{
    path: 'cart',
    component: Cart
}
];
