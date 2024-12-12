import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {

transform(value: string, format:'uppercase'|'lowercase'|'capitalize'): string {
if(!value) return value;

switch( format){
  case'uppercase':
    return value.toUpperCase();
  case'lowercase':
    return value.toLowerCase();
  case'capitalize':
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  default:
    return value;
  }
    
  }

}
