import app from "../../../config/firebase";
import {
  // collection,
  // query,
  // where,
  // getDocs,
  getFirestore,
  doc,
  writeBatch,
  updateDoc,
  increment,
  getDoc,
} from "firebase/firestore";
import axios from "axios";

const db = getFirestore(app);

const check_serial = async (serial_no) => {
  const dbRef = doc(db, `product_registration`, serial_no);

  const snap = await getDoc(dbRef);
  console.log("snap", snap);
  const data = snap.data();

  if (!data) {
    return false;
  }

  return true;
};

export default async function func(req, res) {
  console.log("Adding serials and date of products");
  try {
    const batch = writeBatch(db);

    const all_product_serials = req.body.data;
    const product_id = req.body.product_id;

    for (let x of all_product_serials) {
      // check if serial no is already present
      const checkref = doc(db, `product_registration`, x.serial_no);

      const snap = await getDoc(checkref);
      const data = snap.data();

      if (data) {
        res.status(400).json({
          msg: "Serial mnumber already present. Please try again.",
        });
      }

      const dbRef = doc(db, `product_registration`, x.serial_no);
      batch.set(dbRef, x);
    }

    const resp = await batch.commit();

    const count_products = all_product_serials.length;

    const countRef = doc(db, "population_data", "product_count");
    await updateDoc(countRef, {
      [product_id]: increment(count_products),
    });

    res.status(200).json({
      msg: `Successfully Added all product serial ids`,
    });
    console.log(`Successfully Added all product serial ids`);
  } catch (error) {
    console.log("Error while Added all product serial ids", error);
    res.status(500).json({
      msg: `Error in Added all product serial ids`,
    });
  }
}
