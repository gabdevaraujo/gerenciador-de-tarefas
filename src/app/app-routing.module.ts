import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tarefaRoutes } from './tarefas/tarefas-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...tarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
