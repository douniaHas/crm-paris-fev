import { Client } from 'src/app/shared/models/client.model';


export const FakeClients: Client[] = [
  new Client({
    id: 'ca',
    name: 'Capgemini',
    email: 'dounia.hassani@capgemini.com'
  }),
  new Client({
    id: 'so',
    name: 'Atos',
    email: 'dounia.hassani@atos.fr',
  })
];

