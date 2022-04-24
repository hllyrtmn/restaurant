import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(value: Restaurant[], filterText:string): Restaurant[] {
    filterText = filterText? filterText.toLocaleLowerCase(): '';
    return filterText ? value.filter((r:Restaurant)=>
      r.type.toLocaleLowerCase().indexOf(filterText) ! != -1
    ):value

  }

}
