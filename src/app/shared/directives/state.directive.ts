import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective  implements  OnChanges {
  @Input() appState: State;
  @HostBinding('class') nomClass: string;
  constructor() {
    console.log(this.appState);
   }

   // tslint:disable-next-line:use-life-cycle-interface
   ngOnChanges() {
     console.log(this.appState);
     this.nomClass = this.formatClass(this.appState);
   }

   private formatClass(state: State): string {
     return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}` ;
   }
}
// option => state-option
// annulé=>state-annule
// Confirmé=>state-confirmé

// binder l'attr class de l'élément host avec ce string (le td )
