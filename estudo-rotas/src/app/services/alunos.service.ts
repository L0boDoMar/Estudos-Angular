import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 34, nome: 'Cleberson', email: 'cleberson@email.com'},
    {id: 2, nome: 'Jubscleuso', email: 'jubscleuso@email.com'},
    {id: 3, nome: 'Jurandir', email: 'jurandir@email.com'},
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id:number){
    for (let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
