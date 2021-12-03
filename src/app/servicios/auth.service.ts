import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { iUser } from '../pages/interfaz/iUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public usuarioLogeado:iUser;
  constructor(private client: HttpClient) { }

public async iniciarSesion(correo: string,password: string): Promise<boolean>{ 
  let retorno = false;
      const resultado = await this.client
      .get<Array<iUser>>(`http://localhost:3000/usuarios?corrreo=${correo}&password=${password}`)
      .toPromise();
      if(resultado.length==0){
        retorno = false;
      }
      else{
        this.usuarioLogeado = resultado[0];
        retorno = true;
      }
      return retorno;
  }     

}   
