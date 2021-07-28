import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unicorn } from '../../../shared/models/unicorn.model';

const isValidBirthYear = (control: FormControl) =>
    control.value > 1800 && control.value <= new Date().getFullYear() ? null : { badBirthYear: true };

@Component({
    selector: 'app-unicorn-edit-dialog',
    templateUrl: './unicorn-edit-dialog.component.html',
    styleUrls: ['./unicorn-edit-dialog.component.scss'],
})
export class UnicornEditDialogComponent {
    public unicornForm = this.fb.group({
        name: [this.data.unicorn.name, [Validators.required]],
        birthyear: [this.data.unicorn.birthyear, [Validators.required, isValidBirthYear]],
    });

    constructor(
        public dialogRef: MatDialogRef<UnicornEditDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { unicorn: Unicorn },
        private readonly fb: FormBuilder
    ) {}

    public save(): void {
        const updatedUnicorn = { ...this.data.unicorn, ...this.unicornForm.value };
        delete updatedUnicorn.capacitiesLabels;
        this.dialogRef.close(updatedUnicorn);
    }
}
