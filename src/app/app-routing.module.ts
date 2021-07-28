import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';

const routes: Routes = [
    { path: '', component: UnicornListComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
