import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {
    @Input() public unicorn?: Unicorn;
    @Output() private deleted = new EventEmitter<void>();

    public isInCart$ = this.cartService.cart$.pipe(map((unicorns) => unicorns.some((u) => u.id === this.unicorn?.id)));

    constructor(private readonly cartService: CartService) {}

    public delete(): void {
        this.deleted.emit();
    }

    public toggle(): void {
        this.cartService.toggle(this.unicorn!);
    }
}
