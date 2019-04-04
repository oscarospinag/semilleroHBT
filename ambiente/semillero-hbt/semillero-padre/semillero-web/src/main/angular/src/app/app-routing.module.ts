import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreacionPersonasComponent } from './nucleo/main/creacion-personas/creacion-personas.component';

const routes: Routes = [

  { path: '', component: AppComponent },
  { path: 'creacion-personas', component: CreacionPersonasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
