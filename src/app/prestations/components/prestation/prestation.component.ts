import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  public states = State;
    constructor(private ps: PrestationService) {
   }

  ngOnInit() {
    console.log(this.item); // afctation de l'input au niveau de l'init et pas au niv du constructeur
  }

  public changeState(item: Prestation, event) {
    const state = event.target.value;
    this.ps.update(item, state);
  }

}
