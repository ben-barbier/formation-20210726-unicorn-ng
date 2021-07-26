import { Component } from '@angular/core';
import { UnicornsService } from '../../shared/services/unicorns.service';
import { Unicorn } from '../../shared/models/unicorn.model';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns: Unicorn[] = [];

    constructor(private readonly unicornsService: UnicornsService) {
        this.unicornsService.getUnicorns().subscribe((unicorns) => (this.unicorns = unicorns));
    }
}
