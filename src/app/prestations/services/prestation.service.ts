import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { FakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  // tslint:disable-next-line:variable-name
  private _collection: Prestation[];
  constructor() {
    this.collection = FakePrestations;
  }

  // get colection
  public get collection(): Prestation[] {
    return this._collection;
  }
  // set collection
  public set collection(col: Prestation[]) {
    this._collection = col;
  }

  // update
  public update(item: Prestation, state: State) {
    item.state = state;
  }

  // add item in collection

  // supprimer item of collection

  // get item by id


}
