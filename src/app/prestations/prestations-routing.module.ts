import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrestationsComponent} from './pages/prestations/prestations.component';

const appRoutes: Routes = [
  { path: '', component: PrestationsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
