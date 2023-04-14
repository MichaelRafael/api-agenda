import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/contatos/contato.component';
import { ContatoAddComponent } from './components/contatos/contato-add/contato-add.component';
import { ContatoUpdatedComponent } from './components/contatos/contato-updated/contato-updated.component';
import { ContatoDeleteComponent } from './components/contatos/contato-delete/contato-delete.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'contatos', component: SobreComponent
  },
  {
    path: 'contatos/create', component: ContatoAddComponent
  },
  {
    path: 'contatos/update/:id', component: ContatoUpdatedComponent
  },
  {
    path: 'contatos/delete/:id', component: ContatoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
