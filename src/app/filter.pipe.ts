import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log("value ==>>> ",value,args);

    if(args==='All'){
      return value;
    }   
    return value.filter(element=>element.status===args.toLowerCase());
    // return value;
  }

}
