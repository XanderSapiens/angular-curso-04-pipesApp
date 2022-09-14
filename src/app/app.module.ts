import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEn from '@angular/common/locales/en-UM'
import localeCl from '@angular/common/locales/es-CL'
import localeRu from '@angular/common/locales/ru'
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEn );
registerLocaleData( localeCl );
registerLocaleData( localeRu );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-UM'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
