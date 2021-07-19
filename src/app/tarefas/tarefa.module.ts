import { CadastrarTarefasComponent } from './cadastrar-tarefas/cadastrar-tarefas.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefaModule { }
