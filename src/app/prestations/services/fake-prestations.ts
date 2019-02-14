import { Prestation } from 'src/app/shared/models/prestation.model';
export const FakePrestations: Prestation[] = [
  new Prestation({
    id: 'al',
    typePresta: 'Formation',
    client: 'Capgemini',
    tjmHt: 3000,
    nbJours: 25,
    comment: 'Merci cap pour ces 25 Jours à 3k',
  }),
  new Prestation({
    id: 'so',
    typePresta: 'Lead dev',
    client: 'Atos',
    tjmHt: 3500,
    nbJours: 20,
    comment: 'Merci atos pour ces 20 Jours à 3.5k',
  }),
  new Prestation({
    id: 'gf',
    typePresta: 'Tech manager',
    client: 'EDF',
    tjmHt: 4000,
    nbJours: 30,
    comment: 'Merci EDF pour ces 20 Jours à 3.5k',
  })

];

