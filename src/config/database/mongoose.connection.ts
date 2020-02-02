import { CONSTANTS } from '@constants';
import { connect, connection, set, Error } from 'mongoose';

import { SeedDB } from './../../app/seeder';

export class MongoDB {

  constructor(dbUrl: string) {

    connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    set('useCreateIndex', true);

    connection.on('error', (err: Error) => {
      console.log(`Database connection error occurred :( ${err}`);
      process.exit(1);
    });

    connection.once('open', () => {
      console.log(`Successfully connected to database :D at ${dbUrl}`);

      connection.db.listCollections({ name: CONSTANTS.DATABASE_COLLECTIONS.CATEGORY })
        .next()
        .then(collections => {
          set('debug', (collectionName: any, method: any, query: any, doc: any) => {
            console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
          });
          if (!collections) {
            new SeedDB();
          }
        })
        .catch(error => {
          console.log(error.message);
          process.exit(1);
        });
    });
  }
}
