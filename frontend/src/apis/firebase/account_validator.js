import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import db from "../../config/firebase_config";


async function accountValidator(baseURLInstance, url) {
    // Merin-Philamin-Mathew
    // MerinMathew19
    // merinmathew19

    try {
        console.log(baseURLInstance + url)

        const response = await baseURLInstance.get(url)
        console.log(response, "response")

        const data = await response.data
        console.log(baseURLInstance);
        console.log(data, "data")

        console.log(response.status)
        if (response.status === 200) {
            return { status: true, data: data }
        }
        else {
            return { status: false }
        }
    }
    catch (e) {
        console.error("Network error", e)
        return { status: false }
    }
}


export async function credUniqueValidator(phone_number, email_address) {

    try {
        console.log(phone_number, email_address);

        let collectionRef = collection(db, "students")
        let emailReference = await getDocs(query(collectionRef, where("email", "==", email_address)));
        let phoneReference = await getDocs(query(collectionRef, where("phoneNumber", "==", phone_number)));

        console.log(phoneReference.docs.map((each) => console.log(each.data())));
        if (!phoneReference.empty) {
            return { status: false, msg: "Phone number already exist" }
        }

        if (!emailReference.empty) {
            return { status: false, msg: "Email address already exist" }
        }

        return { status: true }
    } catch (e) {
        console.log(e);
        return false;
    }
}

export { accountValidator }


