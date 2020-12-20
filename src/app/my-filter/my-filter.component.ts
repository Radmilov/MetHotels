import { Pipe, PipeTransform } from '@angular/core';
import { Hotel }  from '../app.component';

@Pipe({ name: "pricePipe"})
export class MyFilterComponent implements PipeTransform{

  transform(hoteli: Hotel[], price: number): Hotel[] {
    if(price == 0)
    return hoteli;
    return hoteli.filter(hotel => hotel.price < price);
  }

}
