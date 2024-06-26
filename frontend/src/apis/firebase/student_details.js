import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import db from "../../config/firebase_config";
import const_data from "../../config/constant";



// add student api

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


// get single student api
function getSingleStudentProfile(student_id, successCallback, errorCallback) {

    let docs = doc(db, const_data.FB_STUDENT_COLLECTION_NAME, student_id);
    getDoc(docs).then((student_docs) => {
        let student = student_docs.data();
        successCallback(student)
    }).catch((err) => {
        console.log(err);
        errorCallback("Something went wrong")
    })
}


export { addStudent, getAllStudentProfile, getSingleStudentProfile }

