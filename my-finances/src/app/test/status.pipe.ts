import { Pipe, PipeTransform } from '@angular/core';

// interface Values  { 
//   name: string,
//   status: boolean,
//   price: number
// }

@Pipe({
  name: 'status'
})


export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 
     console.log(value)
 
   
  }

}
