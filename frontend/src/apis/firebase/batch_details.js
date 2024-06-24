import { collection, getDocs } from "firebase/firestore"
import db from "../../config/firebase_config"



// get batch
async function getBatch() {
    try{
        const batchesArray = []
        const querySnapshot = await getDocs(collection(db, "batch"))
        const batches= querySnapshot.docs
        querySnapshot.forEach((doc)=>{
            batchesArray.push(doc.data().name)
        })
        return batchesArray
        
    }catch (error){
        console.error('Error fetching batches:',error)
    }
}

export {getBatch}