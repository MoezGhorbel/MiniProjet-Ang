import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return [];
    }
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      return val.title.toLowerCase().includes(args.toLowerCase());
    });
  }
}
