import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iUser } from '../pages/interfaz/iUser';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private url: string = "http://localhost:3000/usuarios";
  private cliente: HttpClient
  constructor(moduloHttp: HttpClient) {
    this.cliente = moduloHttp;
   }

   public listarUsuario(): Observable<Array<iUser>>{
     return this.cliente.get<Array<iUser>>(this.url);
   }

   public agregarUsuario(usuarioNuevo: iUser): Observable<iUser>{
    return this.cliente.post<iUser>(this.url, JSON.stringify(usuarioNuevo), {
      headers: {
        "Content-Type":"application/json"
      }
    });
   }

   public eliminarUsuario(id:number): Observable<iUser>{
     return this.cliente.delete<iUser>(this.url+"/"+id)
   }

   public modificarUsuario(usuarioNuevo: iUser, id:number): Observable<iUser>{
    return this.cliente.put<iUser>(this.url+"/"+id, JSON.stringify(usuarioNuevo), {
      headers: {
        "Content-Type":"application/json"
      }
    });
   }
}
