import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, switchMap } from 'rxjs/operators';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';
import { UnicornsService } from '../../../shared/services/unicorns.service';
import { UnicornEditDialogComponent } from '../unicorn-edit-dialog/unicorn-edit-dialog.component';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {
    @Input() public unicorn?: Unicorn;
    @Output() private deleted = new EventEmitter<void>();

    public isInCart$ = this.cartService.cart$.pipe(map((unicorns) => unicorns.some((u) => u.id === this.unicorn?.id)));

    constructor(
        private readonly cartService: CartService,
        private readonly dialog: MatDialog,
        private readonly unicornsService: UnicornsService
    ) {}

    public delete(): void {
        this.deleted.emit();
    }

    public toggle(): void {
        this.cartService.toggle(this.unicorn!);
    }

    public edit(): void {
        this.dialog
            .open(UnicornEditDialogComponent, { data: { unicorn: this.unicorn } })
            .afterClosed()
            .pipe(
                filter((updatedUnicorn) => !!updatedUnicorn),
                switchMap((updatedUnicorn) => this.unicornsService.updateUnicorn(updatedUnicorn))
            )
            .subscribe();
    }
}
