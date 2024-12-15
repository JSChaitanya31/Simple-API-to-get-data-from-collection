import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
// import * as serviceAccount from './firebase-adminsdk.json'; 

@Injectable()
export class FirebaseService {
    private firestore: admin.firestore.Firestore;

    constructor() {
        // const serviceAccount = require("path/to/serviceAccountKey.json");
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: "https://demoproj-eacc0-default-rtdb.asia-southeast1.firebasedatabase.app"
        });
        this.firestore = admin.firestore();
    }


    async getCollectionData(users: string): Promise<any[]> {
        const snapshot = await this.firestore.collection(users).get();
        const data = snapshot.docs.map(doc => doc.data());
        return data;
    }

}
