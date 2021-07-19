import { Tarefa } from './tarefa.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrarTarefa(tarefa: Tarefa) {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    const tarefa: any = tarefas.find(tarefa => tarefa.id === id);
    return tarefa;
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((taref: Tarefa, index: number, tarefs: Tarefa[]) => {
      if (taref.id === tarefa.id) {
        tarefs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  deletar(tarefa: Tarefa): void{
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(t => t.id != tarefa.id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /* alterarStatus(tarefa: Tarefa): void {

  } */
}
