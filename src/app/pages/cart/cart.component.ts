import { Component } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    public cart$ = this.cartService.cart$;

    constructor(private readonly cartService: CartService) {}

    public removeFromCart(unicorn: Unicorn): void {
        this.cartService.toggle(unicorn);
    }
}
