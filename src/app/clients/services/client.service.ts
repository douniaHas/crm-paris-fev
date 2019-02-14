import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { FakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // tslint:disable-next-line:variable-name
  private _collection: Client[];
  constructor() {
    this.collection = FakeClients;
   }
     // get colection
  public get collection(): Client[] {
    return this._collection;
  }
  // set collection
  public set collection(col: Client[]) {
    this._collection = col;
  }

  // update
  public update(item: Client, state: StateClient) {
    item.state = state;
  }
}

