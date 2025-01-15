// Import Firebase functions and the configured db
import { ref, set, get, update, remove } from "firebase/database";
import { db } from "../firebase/firebase-config.js";

// Add Data to Firebase
export async function addToFirebase(path, data) {
    const dbRef = ref(db, path);
    await set(dbRef, data);
}

// Fetch Data from Firebase
export async function fetchFromFirebase(path) {
    const dbRef = ref(db, path);
    const snapshot = await get(dbRef);
    return snapshot.exists() ? snapshot.val() : null;
}

// Update Data in Firebase
export async function updateFirebase(path, data) {
    const dbRef = ref(db, path);
    await update(dbRef, data);
}

// Delete Data from Firebase
export async function deleteFromFirebase(path) {
    const dbRef = ref(db, path);
    await remove(dbRef);
}
