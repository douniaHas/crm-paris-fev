import { Pipe, PipeTransform } from '@angular/core';
import {Prestation} from '../models/prestation.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, args?: any): any {
    console.log(args);
    if ( value ) {
      if (args) {
        return value.totalTTC(args);
      }
      return value.totalHT();
    }
    return null;
  }

}
