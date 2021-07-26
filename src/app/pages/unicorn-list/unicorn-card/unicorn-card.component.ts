import { Component, Input, OnInit } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
    @Input() unicorn?: Unicorn;

    public age?: number;

    ngOnInit(): void {
        this.age = new Date().getFullYear() - this.unicorn!.birthyear;
    }
}
