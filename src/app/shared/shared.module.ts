import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableauComponent } from './containers/tableau/tableau.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { StateClientDirective } from './directives/state-client.directive';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, StateClientDirective],
  exports: [TotalPipe, TableauComponent, StateDirective, StateClientDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
