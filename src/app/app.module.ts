import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import { PerfilComponent } from 'src/pages/perfil/perfil.component';
//import { InicioComponent } from 'src/pages/inicio/inicio.component';
//import { ConfigComponent } from 'src/pages/config/config.component';
//import { AyudaComponent } from 'src/pages/ayuda/ayuda.component';
//import { NotificacionesComponent } from 'src/pages/notificaciones/notificaciones.component';

@NgModule({
  declarations: [AppComponent
    //AyudaComponent,InicioComponent,ConfigComponent,PerfilComponent,NotificacionesComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
