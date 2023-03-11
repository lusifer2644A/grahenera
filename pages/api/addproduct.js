import app from "../../config/firebase";
import {
  // collection,
  // query,
  // where,
  // getDocs,
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(app);
export default async function createTest(req, res) {
  console.log("Adding Product");
  try {
    const id = Math.floor(Math.random() * 1000000000);
    const dbRef = doc(db, `products`, id.toString());
    const firebase_data = {
      ...req.body,
      id,
    };

    const response = await setDoc(dbRef, firebase_data);
    res.status(200).json({
      msg: `Successfully Added Product ${id}`,
    });
    console.log(`Successfully Added Product ${id}`);
  } catch (error) {
    console.log("Error while Added Product", error);
    res.status(500).json({
      msg: `Error in Added Product`,
    });
  }
}
