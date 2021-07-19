import { EditarTarefasComponent } from './editar-tarefas/editar-tarefas.component';
import { CadastrarTarefasComponent } from './cadastrar-tarefas/cadastrar-tarefas.component';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const tarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefasComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefasComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefasComponent
  }
];
