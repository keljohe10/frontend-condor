import { throwError } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) { }

  getUsuarios() {
    let url = 'http://localhost:3000/usuarios';
    return this.http.get( url)
                .pipe( map( (data: any) => data.usuarios));
  }
  setUsuario( usuario: Usuario) {
    let url = 'http://localhost:3000/usuarios';
    return this.http.post( url, usuario)
                .pipe( map( (data: any) => data.usuarios),
                 catchError( err => {
                  console.log(err.error.mensaje);
                  swal('Error: ', err.error.mensaje, 'error');
                  return throwError(err);
                }) );
  }
}
