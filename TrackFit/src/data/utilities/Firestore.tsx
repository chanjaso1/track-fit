import { doc, collection, setDoc, getDocs } from 'firebase/firestore/lite';
import db from '../service-agents/firebaseConfig';

export function writeWeight(date: any, val: any) {
    setDoc(doc(db, "weights", date), {
        weight: val
    });
}