import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn?: Unicorn;
    @Output() private deleted = new EventEmitter<void>();

    public age?: number;

    ngOnInit(): void {
        this.age = new Date().getFullYear() - this.unicorn!.birthyear;
    }

    public delete(): void {
        this.deleted.emit();
    }
}
