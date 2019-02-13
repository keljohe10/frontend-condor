import { HttpClientModule } from '@angular/common/http';
import { ClimaService } from './services/clima.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routes';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ClimaComponent } from './components/clima/clima.component';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ClimaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClimaService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
