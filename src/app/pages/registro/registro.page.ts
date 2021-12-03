import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { iUser } from '../interfaz/iUser';

@Component({
  selector: 'registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public usuario: iUser = {
    nombre: '',
    apellido: '',
    password: '',
    correo: ''
  }
  private servicio: DatosService

  constructor(DatosServicio: DatosService) { 
    this.servicio = DatosServicio;
  }

  public agregarUsuario(){
    console.log(this.usuario);
    this.servicio.agregarUsuario(this.usuario)
    .subscribe( respuesta => {
      console.log(respuesta);
    })
  }

  ngOnInit() {
  }

}
