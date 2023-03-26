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
  setDoc,
} from "firebase/firestore";
import axios from "axios";

const db = getFirestore(app);

const generate_serial_no = (id) => {
  let date = new Date();

  let year = date.getFullYear();

  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month.toString();
  }

  let day = date.getDate();
  if (day < 10) {
    day = "0" + day.toString();
  }

  let randNo = Math.floor(Math.random() * 100000);

  let newid = year + month + day + id.substr(-4, 4) + randNo;

  return newid;
};

export default async function func(req, res) {
  console.log("Registering Service");
  try {
    const product_id = req.body.product_id;
    const vehicle_number = req.body.vehicle_number;

    const service_id = generate_serial_no(vehicle_number);

    let date = new Date();
    date = Date.parse(date);

    const new_service_data_new = {
      service_id,
      vehicle_number,
      product_id,
      date_of_service: date,
      next_service_date: date + 0.5 * 31556926000,
      service_no: 1,
    };

    const dbRef = doc(db, "vehicle_service", vehicle_number.toLowerCase());

    const oldDataSnap = await getDoc(dbRef);
    const oldData = oldDataSnap.data();

    if (!oldData) {
      const response = await setDoc(dbRef, {
        services: [new_service_data_new],
      });

      return res.status(200).json({
        msg: `Successfully Registered Service ${service_id}`,
        service_id,
      });
    }

    const new_service_data_old = {
      service_id,
      vehicle_number,
      product_id,
      date_of_service: date,
      next_service_date: date + 1.5 * 31556926000,
      service_no: oldData.services.length + 1,
    };

    const response = await setDoc(dbRef, {
      ...oldData,
      services: [new_service_data_old, ...oldData.services],
    });

    res.status(200).json({
      msg: `Successfully Registered Service ${service_id}`,
      service_id,
    });
    console.log(`Successfully Registered Service ${service_id}`);
  } catch (error) {
    console.log("Error while Registering Service", error);
    res.status(500).json({
      msg: `Error in Registering Service`,
    });
  }
}
