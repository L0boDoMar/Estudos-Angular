import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit{

  aluno: any;
  inscricao!: Subscription;

  constructor(private route: ActivatedRoute, private alunoService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any)=>{
        let id = params['id'];

        this.aluno = this.alunoService.getAluno(id);
      }
    );
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id,'editar']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
