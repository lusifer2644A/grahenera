import app from "../../../config/firebase";
import {
  // collection,
  // query,
  // where,
  // getDocs,
  getFirestore,
  doc,
  getDoc,
  // setDoc,
  // writeBatch,
} from "firebase/firestore";

const db = getFirestore(app);
export default async function func(req, res) {
  const vehicle_number = req.body.vehicle_number;
  console.log("Checking vehicle number", vehicle_number);
  try {
    const dbRef = doc(db, `vehicle_service`, vehicle_number.toLowerCase());

    const snap = await getDoc(dbRef);
    const data = snap.data();

    if (!data) {
      return res.status(200).json({
        msg: `Vehicle Number not found`,
        status: 0,
        data: {
          services: [],
        },
      });
    }

    res.status(200).json({
      msg: `Successfully fetched vehicle details`,
      status: 1,
      data: data,
    });
    console.log(`Successfully fetched vehicle details`, data);
  } catch (error) {
    console.log("Error while fetching vehicle details", error);
    res.status(500).json({
      msg: `Error in fetching vehicle details`,
    });
  }
}
