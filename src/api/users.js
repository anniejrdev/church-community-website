import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

// 📥 GET ALL USERS
export async function getUsers() {
  const snap = await getDocs(collection(db, "users"));
  return snap.docs.map(d => ({
    id: d.id,
    ...d.data()
  }));
}

// ✏️ UPDATE USER (optional)
export async function updateUser(id, data) {
  await updateDoc(doc(db, "users", id), data);
}