import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { Subscription } from 'rxjs';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './aluno-formulario.component.html',
  styleUrls: ['./aluno-formulario.component.css']
})
export class AlunoFormularioComponent implements OnInit{
aluno: any = {};
inscricao!: Subscription;

constructor(private route: ActivatedRoute, private alunosService: AlunosService) { }

ngOnInit(){
this.inscricao = this.route.params.subscribe(
  (params:any)=>{
    let id=params['id'];

    this.aluno=this.alunosService.getAluno(id);

    if(this.aluno === null){
      this.aluno = {};
    }
  }
);
}

ngOnDestroy(){
  this.inscricao.unsubscribe();
}
}
