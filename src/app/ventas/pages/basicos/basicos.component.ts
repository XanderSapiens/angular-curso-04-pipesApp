import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'alexander';
  nombreUpper: string = 'ALEXANDER';
  nombreCompleto: string = 'AleXaNdEr CueVas';

  fecha: Date = new Date();
}
