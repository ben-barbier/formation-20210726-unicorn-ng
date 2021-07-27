import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [],
    imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule],
    exports: [MatIconModule, MatButtonModule, MatCardModule],
})
export class MaterialModule {}
