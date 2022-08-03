import firebaseAdmin from 'firebase-admin';
import { firebaseConfig } from '@amerix/config';

const serviceAccount = firebaseConfig.adminConnectionUrl;
const firebaseDatabaseUrl = firebaseConfig.adminDatabaseUrl;
const firebaseStorageBucket = firebaseConfig.adminStorageUrl;

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: firebaseDatabaseUrl,
  storageBucket: firebaseStorageBucket
});

const firebase = firebaseAdmin.firestore();
const realTimeDb = firebaseAdmin.database();

const admin = firebaseAdmin;

export { admin, firebase, realTimeDb };
