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
  const serial_no = req.body.serial_no;
  console.log("Checking Serial", serial_no);
  try {
    const dbRef = doc(db, `product_registration`, serial_no);

    const snap = await getDoc(dbRef);
    console.log("snap", snap);

    const data = snap.data();

    if (!data) {
      res.status(200).json({
        msg: `Serial Number not found`,
        status: 0,
      });
    }

    res.status(200).json({
      msg: `Successfully fetched serial number`,
      status: 1,
      data: data,
    });
    console.log(`Successfully fetched serial number`, data);
  } catch (error) {
    console.log("Error while fetching serial ids", error);
    res.status(500).json({
      msg: `Error in fetching serial ids`,
    });
  }
}
