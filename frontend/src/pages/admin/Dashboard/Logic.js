import { addDoc, collection } from "firebase/firestore";
import db from "../../../config/firebase_config";


function addBatchHandler(values, successCB, errorCb) {
    let { batch } = values;

    try {

        addDoc(collection(db, "batch"), { "name": batch }).then((data) => {
            successCB();
        }).catch((err) => {
            errorCb("Something went wrong")
        })
    } catch (e) {
        errorCb("Something went wrong")
    }

}

export { addBatchHandler }