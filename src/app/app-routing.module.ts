import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCasesComponent } from './add-cases/add-cases.component';

const routes: Routes = [
  {path: '', component: AddCasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
