import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'listar', component: ListarComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: '**', pathMatch: 'full' , redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
