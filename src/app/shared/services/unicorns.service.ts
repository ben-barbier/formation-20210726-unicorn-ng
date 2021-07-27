import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatAll, map, mergeMap, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Unicorn } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {
    constructor(private readonly http: HttpClient, private readonly capacitiesService: CapacitiesService) {}

    public getUnicorns(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`).pipe(
            concatAll(),
            map((unicorn) => ({ ...unicorn, name: this.getMagicalName(unicorn.name) })),
            toArray()
        );
    }

    public getUnicornsWithCapacitiesLabels(): Observable<Unicorn[]> {
        return this.getUnicorns().pipe(
            concatAll(),
            mergeMap((unicorn) =>
                from(unicorn.capacities).pipe(
                    mergeMap((capacityId) => this.capacitiesService.getCapacity(capacityId)),
                    map((capacity) => capacity.label),
                    toArray(),
                    map((capacitiesLabels) => ({ ...unicorn, capacitiesLabels }))
                )
            ),
            toArray()
        );
    }

    private getMagicalName(name: string): string {
        return name
            .split('')
            .map((char, idx) => (idx % 2 ? char.toLowerCase() : char.toUpperCase()))
            .join('');
    }
}
