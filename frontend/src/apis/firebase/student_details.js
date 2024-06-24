// add student api

import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
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

async function getProfileStatus(username = "Merin-Philamin-Mathew") {

    let userStatus = {
        push: 0,
        pull: 0,
        commits: 0
    }
    try {

        let apiCall = await fetch(`https://api.github.com/users/${username}/events`);
        let data = await apiCall.json()

        data.forEach((each) => {
            if (each.type == "PushEvent") {
                userStatus.push += each.payload.size
                userStatus.commits += each.payload.commits.length
            } else if (each.type == "PullRequestEvent") {
                userStatus.pull++
            }
        })

        return userStatus;

    } catch (e) {
        return null;
    }
}

export { addStudent, getAllStudentProfile, getSingleStudentProfile, getProfileStatus }