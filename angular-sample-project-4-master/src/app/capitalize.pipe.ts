import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.replace(/\w\S*/g, function(txt) {
        let returnValue =  txt.charAt(0).toUpperCase() + txt.substr(1,txt.length-2).toLowerCase()+txt.charAt(txt.length-1).toUpperCase();
         console.log("return value is "+ returnValue);
         return returnValue;
     }); 
  
  

  }
}