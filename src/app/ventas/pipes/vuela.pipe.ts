import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'volar'
})
export class VuelaPipe implements PipeTransform {

  transform(valor: boolean): string {

    return (valor) 
            ? 'vuela'
            : 'no vuela';
    
  }

}
