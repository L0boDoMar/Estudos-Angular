import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
//import { CursosComponent } from './components/cursos/cursos.component';
//import { CursoDetalheComponent } from './components/cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './components/cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  //{path:'cursos', component: CursosComponent},
  //{path: 'nao-encontrado', component: CursoNaoEncontradoComponent},
  //{path:'curso/:id', component: CursoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
