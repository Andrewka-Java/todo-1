import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'taskDates'
})
export class TaskDatePipe extends DatePipe implements PipeTransform {

  transform(date: Date | string, format: string = 'mediumDate'): string {

    if (date == null) {
      return 'Without date';
    }

    date = new Date(date);
    let currentDate = new Date().getDate();


    if (date.getDate() === currentDate) {
      return 'Today';
    }

    if (date.getDate() === currentDate - 1) {
      return 'Yesterday';
    }

    if (date.getDate() === currentDate + 1) {
      return 'Tomorrow';
    }


    return new DatePipe('en-US').transform(date, format);
  }

}
