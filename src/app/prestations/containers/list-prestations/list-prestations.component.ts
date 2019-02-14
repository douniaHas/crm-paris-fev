import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[];
// public states = Object.values(State);

public stateDefaut: boolean = State.ANNULE ? true : false;
constructor(private ps: PrestationService) {}

  ngOnInit() {
    this.collection = this.ps.collection;
    this.headers  = ['type', 'client', 'nb jours', 'tjm ht', 'total ht', 'total ttc', 'state'];
  }


}
