/**
 * This file contains all the methods required to query, update and store values in the database.
 *
 * Reference: https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9_8
 */
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore/lite";
import db from "../service-agents/firebaseConfig";

/**
 * Updates the weight value to the corresponding date document of the parameter date.
 */
export function writeWeight(date: any, val: any) {
  setDoc(doc(db, "weights", date), {
    weight: val,
  });
}

/**
 * Obtains the weight values of the last seven days, and returns them into an array.
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
    if (docSnap.exists()) {
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
  return weight;
}

/**
 * Obtain the user's set goals from firestore.
 */
export async function getGoals() {
  var out: any = {};
  var docRef = doc(db, "users", "user1");
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    out = {
      cal: docSnap.data().GoalCalories,
      dist: docSnap.data().GoalDistance,
      step: docSnap.data().GoalSteps,
      weight: docSnap.data().GoalWeight,
    };

    return out;
  }
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

/**
 * Update the user's daily goals within the database.
 * This includes the goal calories, distance, weight and steps.
 */
export async function updateDailyGoals(
  calories: any,
  distance: any,
  steps: any,
  weight: any
) {
  const user = doc(db, "users", "user1"); // gets the user stored in the database

  // updates the daily goal fields within the database
  await updateDoc(user, {
    GoalCalories: calories,
    GoalDistance: distance,
    GoalSteps: steps,
    GoalWeight: weight,
  });
}

/**
 * Obtains the date's step progress so far.
 */
export async function getProgress() {
  var d = new Date();
  var date =
    String(d.getDate()) +
    "-" +
    String(d.getMonth() + 1) +
    "-" +
    String(d.getFullYear());

  var docRef = doc(db, "progress", date);
  var docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { r: docSnap.data().runStep, w: docSnap.data().walkStep };
  } else {
    return { r: 0, w: 0 };
  }
}

/**
 * Updates the date's step progress so far.
 */
export async function setProgress(run: number, walk: number) {
  var d = new Date();
  var date =
    String(d.getDate()) +
    "-" +
    String(d.getMonth() + 1) +
    "-" +
    String(d.getFullYear());

  setDoc(doc(db, "progress", date), { runStep: run, walkStep: walk });
}

/**
 * Get the user's name from the database.
 */
export async function getUserName() {
  var docRef = doc(db, "users", "user1");
  var docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().Name;
  }
}
