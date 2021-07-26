import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {
    @Input() public unicorn?: Unicorn;
    @Output() private deleted = new EventEmitter<void>();

    public delete(): void {
        this.deleted.emit();
    }
}
