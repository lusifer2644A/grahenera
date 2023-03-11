import app from "../../config/firebase";
import {
  // collection,
  // query,
  // where,
  // getDocs,
  getFirestore,
  doc,
  // setDoc,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore(app);
export default async function createTest(req, res) {
  console.log("Updating Product");
  try {
    const { data, product_id } = req.body;

    if (!product_id) {
      res.status(400).json({
        msg: "Please send a valid Product ID!",
      });
    }

    const dbRef = doc(db, `products`, product_id.toString());
    const temp = {
      ...data,
    };

    const resp = await updateDoc(dbRef, temp);
    res.status(200).json({
      msg: `Successfully updated product ${[product_id]}`,
    });
    console.log(`Successfully updated product ${product_id}`);
  } catch (error) {
    console.log("Error while updating product ", error);
    res.status(500).json({
      msg: `Error in updating product`,
    });
  }
}
