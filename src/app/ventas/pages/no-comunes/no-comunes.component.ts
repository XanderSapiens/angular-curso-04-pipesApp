import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

// i18nSelect
  nombre: string = 'Susana';
  invitar: string = 'femenino';
  genero: string = 'femenino';


  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  generoMap = {
    'masculino': 'señor',
    'femenino': 'señorita'
  }

  cambiarPersona(nombre: string){
    this.nombre = nombre;
    if(this.nombre === 'Susana' ){
      this.nombre = 'Alexander';
      this.invitar = 'masculino';
      this.genero = 'masculino';
    }else{
      if(this.nombre === 'Alexander'){
        this.nombre = 'Susana';
        this.invitar = 'femenino';
        this.genero = 'femenino';
      }
    }
    
  }
     
    
  // i18nPlural

  clientes: string [] = ['Maria','Pedro','Jose','Roberto'];
  clientesMap = {
    '=0': 'no hay ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  clienteMas(clientes: string []){
    clientes.push('Ale');
  }

  clienteMenos(clientes: string []){
    clientes.pop();
  }

  //keyValue

  persona = {
    nombre: 'Ale',
    edad: 26,
    direccion: 'San Carlos, Chile'
  }

  // json
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ]

  // async

  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject)  => {
    
    setTimeout (() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });
 
}


