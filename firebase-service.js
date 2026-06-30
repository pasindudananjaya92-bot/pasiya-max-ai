 import { db } from "./firebase-config.js";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Add Data
export async function addData(collectionName, data) {
  return await addDoc(collection(db, collectionName), data);
}

// Get All Data
export async function getData(collectionName) {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// Get Single Document
export async function getSingleData(collectionName, id) {
  const ref = doc(db, collectionName, id);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    return {
      id: snap.id,
      ...snap.data()
    };
  }

  return null;
}

// Update Document
export async function updateData(collectionName, id, data) {
  const ref = doc(db, collectionName, id);
  await updateDoc(ref, data);
}

// Delete Document
export async function deleteData(collectionName, id) {
  const ref = doc(db, collectionName, id);
  await deleteDoc(ref);
}
