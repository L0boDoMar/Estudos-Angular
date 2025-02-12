import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//componentes
import { AlunosComponent } from "./alunos.component";
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosService } from "src/app/services/alunos.service";
import { FormsModule } from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  declarations: [
    AlunosComponent,
    AlunoFormularioComponent,
    AlunoDetalhesComponent,
  ],
  exports: [

  ],
  providers:[
    AlunosService
  ]
})
export class AlunosModule {}
