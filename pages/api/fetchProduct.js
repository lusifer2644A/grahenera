import app from "../../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";

const db = getFirestore(app);
export default async function getTestDetails(req, res) {
  console.log("Fetching Product");
  try {
    const { product_id } = req.body;

    if (!product_id) {
      res.status(400).json({
        msg: "Please send a valid Product ID!",
      });
    }

    const dbRef = doc(db, `products`, product_id.toString());

    const snap = await getDoc(dbRef);
    const data = snap.data();

    console.log("Recieved product data", product_id);
    res.status(200).json({
      msg: `Successfully fetched product data`,
      data: data,
    });
  } catch (error) {
    console.log(error);
    console.log("Error while fetching product!");
    res.status(500).json({
      msg: "Error while fetching product!",
    });
  }
}
