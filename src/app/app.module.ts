import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { CartComponent } from './pages/cart/cart.component';
import { UnicornCardComponent } from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { UnicornEditDialogComponent } from './pages/unicorn-list/unicorn-edit-dialog/unicorn-edit-dialog.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { MaterialModule } from './shared/material.module';
import { AgePipe } from './shared/pipes/age.pipe';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        AgePipe,
        NavComponent,
        CartComponent,
        UnicornEditDialogComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
