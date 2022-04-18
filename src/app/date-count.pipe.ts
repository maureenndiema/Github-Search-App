import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    let firstDate: Date = new Date(value)
    let firstDateWithNoTime:any  = new Date(firstDate.getFullYear(),firstDate.getMonth(),firstDate.getDate());
    let currentDate: Date = new Date();
    let todayWithNoTime:any = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate())
    let timeDifferenceSeconds = Math.round(Math.abs((todayWithNoTime - firstDateWithNoTime)/ 10000));
    let days = Math.round(Math.abs((timeDifferenceSeconds) / 8640))
    return days;
  }
}
