import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currenyFormatter'
})
export class CurrenyFormatterPipe implements PipeTransform {

  transform(old_value: any, new_symbol: string): string {
    console.log("===========================");
    console.log(old_value);   // INDIA3,461.46
    console.log(new_symbol);  // Rs.

    if(old_value.substr(0, 3) === 'CAN')
      return old_value.replace('CANADA', new_symbol);  //Rs. 3,461.46
    else if(old_value.substr(0, 3) === 'USA')
      return old_value.replace('USA', new_symbol);     //Rs. 3,461.46
    else
      return old_value.replace('INDIA', new_symbol);   //Rs. 3,461.46
  }

}