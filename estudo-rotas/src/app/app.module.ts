import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
//import { CursosComponent } from './components/cursos/cursos.component';
//import { CursoDetalheComponent } from './components/cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './components/cursos/curso-nao-encontrado/curso-nao-encontrado.component';

//modulos
import { CursosModule } from './components/cursos/cursos.module';
import { AlunosModule } from './components/alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    //CursosComponent,
    //CursoDetalheComponent,
    //CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    CursosModule, //modulo de cursos importado aqui
    AlunosModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
