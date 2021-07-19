import { TarefaService } from './../shared/tarefa.service';
import { Tarefa } from './../shared/tarefa.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', { static: true })
  formTarefa!: NgForm;

  tarefa: Tarefa;

  constructor(
    private service: TarefaService,
    private router: Router
  ) {
    this.tarefa = new Tarefa();
  }

  ngOnInit() {

  }

  cadastrar(): void{
    if (this.formTarefa.valid) {
      this.service.cadastrarTarefa(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
