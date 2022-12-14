import { ExcluirPensamentoComponent } from './componentes/componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentosComponent } from './componentes/componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { EditarPensamentoComponent } from './componentes/componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'listarPensamento',
      pathMatch: 'full'
    },
    {
      path: 'criarPensamento',
      component: CriarPensamentosComponent
    },
    {
      path: 'listarPensamento',
      component: ListarPensamentosComponent
    },
    {
      path: 'pensamentos/excluirPensamento/:id',
      component: ExcluirPensamentoComponent
    }
    ,
    {
      path: 'pensamentos/editarPensamento/:id',
      component: EditarPensamentoComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
