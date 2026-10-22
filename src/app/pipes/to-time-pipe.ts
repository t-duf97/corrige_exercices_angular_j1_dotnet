import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime',
})
export class ToTimePipe implements PipeTransform {
  transform(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')} minutes ${String(seconds).padStart(2, '0')} secondes`;
  }
}
