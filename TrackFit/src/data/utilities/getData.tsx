/**
 * This file retrieves all the data from the database.
 * 
 * Reference: https://firebase.google.com/docs/web/setup
 */

import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../service-agents/firebaseConfig';

// Gets all the data stored in the database
export async function getData() {
    const users = collection(db, 'users');
    const userSnapshot = await getDocs(users);
    const data = userSnapshot.docs.map(doc => doc.data());
    console.log(data);
    return data;
}