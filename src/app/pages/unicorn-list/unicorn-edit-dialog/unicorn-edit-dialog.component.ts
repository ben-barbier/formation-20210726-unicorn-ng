import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unicorn } from '../../../shared/models/unicorn.model';

@Component({
    selector: 'app-unicorn-edit-dialog',
    templateUrl: './unicorn-edit-dialog.component.html',
    styleUrls: ['./unicorn-edit-dialog.component.scss'],
})
export class UnicornEditDialogComponent {
    constructor(public dialogRef: MatDialogRef<UnicornEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { unicorn: Unicorn }) {}
}
