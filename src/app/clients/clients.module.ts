import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './components/client/client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import {SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './pages/clients/clients.component';

@NgModule({
  declarations: [ListClientsComponent, ClientComponent, ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})


export class ClientsModule { }

