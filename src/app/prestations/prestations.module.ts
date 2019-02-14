import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import {SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';

@NgModule({
  declarations: [PrestationsComponent, ListPrestationsComponent, PrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})

export class PrestationsModule { }
