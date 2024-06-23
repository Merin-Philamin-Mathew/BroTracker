// add student api

import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../config/firebase_config";
import const_data from "../../config/constant";

async function addStudent(student_data) {
    try {
        let data = await addDoc(collection(db, const_data.FB_STUDENT_COLLECTION_NAME), student_data);
        let student_id = data.id;
        return { status: true, msg: "Student created success", student_id }
    } catch (e) {
        console.log(e);
        return { status: false, msg: "Student creation failed" }
    }
}


// get student api
function getAllStudentProfile() {

    return new Promise((resolve, reject) => {
        getDocs(collection(db, const_data.FB_STUDENT_COLLECTION_NAME)).then((querySnapShot) => {
            let student_data = querySnapShot.docs
            let all_students = student_data.map((each) => each.data());
            resolve({ status: true, student_list: all_students })
        }).catch((err) => {
            console.log(err);
            reject({ status: false, msg: "Student fetch failed" })
        })
    })

}




export { addStudent }