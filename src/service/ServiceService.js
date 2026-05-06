import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

// 🔥 Get services by day
export const getServicesByDay = async (day) => {
  try {
    const q = query(
      collection(db, "services"),
      where("day", "==", day.toLowerCase())
    );

    const snap = await getDocs(q);

    const data = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (error) {
    console.log("Error fetching services:", error);
    return [];
  }
};