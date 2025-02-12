import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { RouterModule } from "@angular/router";

//componentes
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoRoutingModule } from "./cursos.routing.module";

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule,
    //RouterModule,
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  exports: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ]
})
export class CursosModule {}
