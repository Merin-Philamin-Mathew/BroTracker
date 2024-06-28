import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import db from "../../../config/firebase_config";


async function addBatchHandler(values, successCB, errorCb) {
    let { batch } = values;
    batch = batch.toUpperCase()


    try {

        if (!await checkBatchExistness(batch)) {
            addDoc(collection(db, "batch"), { "name": batch }).then((data) => {
                successCB();
            }).catch((err) => {
                errorCb("Something went wrong")
            })
        } else {
            errorCb("Batch already exist")
        }
    } catch (e) {
        errorCb("Something went wrong")
    }

}

async function checkBatchExistness(batchName) {

    try {

        let check = await getDocs(query(collection(db, "batch"), where("name", "==", batchName)));
        return !check.empty
    } catch (e) {
        return false
    }
}

export { addBatchHandler }