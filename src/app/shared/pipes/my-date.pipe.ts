import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: any): string | null {
    const date = new Date(value);
    //ignore error below or use isNaN.call(date)
    //@ts-ignore
    if(isNaN(date)) return null;

    const result = date.toLocaleString("pl-PL",{
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    return result;
  }

}
