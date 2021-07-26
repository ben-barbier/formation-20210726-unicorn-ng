import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unicorn } from '../models/unicorn.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {
    constructor(private readonly http: HttpClient) {}

    public getUnicorns(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
    }
}
