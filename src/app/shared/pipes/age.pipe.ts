import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'age',
})
export class AgePipe implements PipeTransform {
    transform(birthYear: number, config: { oldPlaceholder: string; youngPlaceholder: string }): string {
        const age = new Date().getFullYear() - birthYear;
        if (age > 60) {
            return config.oldPlaceholder;
        } else if (age < 10) {
            return config.youngPlaceholder;
        } else {
            return age.toString();
        }
    }
}
