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
  console.log("Fetching all Products");
  try {
    const dbRef = collection(db, `products`);

    const resp = await getDocs(dbRef);

    console.log("Recieved all products");
    const entriesData = resp.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));

    res.status(200).json({
      msg: `Successfully Fetched Products`,
      data: entriesData,
    });
  } catch (error) {
    console.log(error);
    console.log("Error while fetching products!");
    res.status(500).json({
      msg: "Error while fetching products!",
    });
  }
}
