import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayus'
})
export class MayusculasPipe implements PipeTransform {

    transform( valor: string, enMayus: boolean = true ):string {
        
        return (enMayus) 
            ? valor.toUpperCase() 
            : valor.toLowerCase();
    }

}