/**
 * This file contains all the methods required to query, update and store values in the database.
 *
 * Reference: https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9_8
 */
import {
  doc,
  collection,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore/lite";
import db from "../service-agents/firebaseConfig";

/**
 * Updates the weight value to the corresponding date document of the parameter date
 */
export function writeWeight(date: any, val: any) {
  setDoc(doc(db, "weights", date), {
    weight: val,
  });
}

/**
 * Obtains the weight values of the last seven days, and returns them into an array
 */
export async function getWeek() {
  var d = new Date();
  var date =
    String(d.getDate()) +
    "-" +
    String(d.getMonth() + 1) +
    "-" +
    String(d.getFullYear());

  var weight: any = [];
  for (let i = 0; i < 7; i++) {
    var docRef = doc(db, "weights", date);
    var docSnap = await getDoc(docRef);
    // console.log(date)
    if (docSnap.exists()) {
      // console.log(docSnap.data().weight);
      weight = [docSnap.data().weight, ...weight];
    } else {
      weight = [null, ...weight];
    }
    d.setDate(d.getDate() - 1);
    date =
      String(d.getDate()) +
      "-" +
      String(d.getMonth() + 1) +
      "-" +
      String(d.getFullYear());
  }
  // console.log(weight)
  return weight;
}

/**
 * Update the user's details within the database.
 * This includes the name and age of the user.
 */
export async function updateUserDetails(name: string, age: number) {
  const user = doc(db, "users", "user1"); // gets the user stored in the database

  // updates the name and age fields to be the inputted values
  await updateDoc(user, {
    Name: name,
    Age: age,
  });
}
