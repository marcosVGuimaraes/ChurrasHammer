import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraCreateComponent } from './components/compras/compra-create/compra-create.component';
import { ContabilidadeReadComponent } from './components/contabilidade/contabilidade-read/contabilidade-read.component';
import { ParticipanteCreateComponent } from './components/lista-participantes//participantes/participante-create/participante-create.component';
import { ConvidadosCreateComponent } from './components/lista-participantes/convidados/convidados-create/convidados-create.component';
import { ConvidadosUpdateComponent } from './components/lista-participantes/convidados/convidados-update/convidados-update.component';
import { ParticipantesUpdateComponent } from './components/lista-participantes/participantes/participantes-update/participantes-update.component';
import { ContabilidadeCRUDComponent } from './views/contabilidade-crud/contabilidade-crud.component';
import { HomeComponent } from './views/home/home.component';
import { ListaParcitipanteCRUDComponent } from './views/lista-parcitipante-crud/lista-parcitipante-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "listaParticipantes",
    component: ListaParcitipanteCRUDComponent
  },
  {
    path: "listaParticipantes/cadastrarParticipante",
    component: ParticipanteCreateComponent
  },
  {
    path:"listaParticipantes/update/:id",
    component: ParticipantesUpdateComponent
  },
  {
    path: "listaConvidado/cadastrarConvidado/:id",
    component: ConvidadosCreateComponent
  },
  {
    path:"listaConvidado/update/:id",
    component: ConvidadosUpdateComponent
  },
  {
    path:"contabilidade",
    component: ContabilidadeReadComponent
  },
  {
    path:"compra/cadastrarCompra",
    component: CompraCreateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
