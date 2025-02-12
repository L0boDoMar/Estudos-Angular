import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { AlunosComponent } from './alunos.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';

//estudo sobre rotas filhas
const routes: Routes = [
{path: 'alunos', component: AlunosComponent, children : [
  {path: 'novo', component: AlunoFormularioComponent},
  {path: ':id', component: AlunoDetalhesComponent},
  {path: ':id/editar', component: AlunoFormularioComponent}
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
