import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public password = "";
  public correo = "";
  constructor(private auth: AuthService) { 

  }
  public iniciarSesion(){
  this.auth.iniciarSesion(this.correo,this.password)
   .then(respuesta => {
      if(respuesta){
        alert("Inicio de sesión exitoso"); 
        location.href = "inicio";
      }
      else{
        alert("Usuario y contraseña no existen");
      }
   })
  }
  ngOnInit() {
  }

}
