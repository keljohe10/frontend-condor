import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  forma: FormGroup;
  usuarios: Usuario[] = [];

  constructor(private _usuarioServices: UsuarioService) {  }

  ngOnInit() {
    this.cargarUsuario();
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });


  }

  registrarUsuario() {

    if (this.forma.invalid) {
       return;
    }

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email
    );

   this._usuarioServices.setUsuario(usuario)
       .subscribe( (data: any) => {
          swal('Usuario guardado: ', data.nombre, 'success');
          this.forma.reset();
          this.cargarUsuario();
       });
  }

  cargarUsuario() {
     this._usuarioServices.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
}
