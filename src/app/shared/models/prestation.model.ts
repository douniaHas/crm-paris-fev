import { State } from '../enums/state.enum';
import { PrestationI } from '../interfaces/prestation-i';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  tjmHt = 0;
  nbJours: number;
  tauxTva = 20;
  comment: string;
  state = State.OPTION;
  totalHT(): number {
    return this.nbJours * this.tjmHt;
  }
  totalTTC(tva?: number): number {
    if (!tva) {
      return this.totalHT() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHT();
    }
    return this.totalHT() * (1 + tva / 100);
  }

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }


}


