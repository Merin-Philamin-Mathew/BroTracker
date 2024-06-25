

async function accountValidator(baseURLInstance, url) {
    // Merin-Philamin-Mathew
    // MerinMathew19
    // merinmathew19

    try{
        console.log(baseURLInstance+url)
        
        const response = await baseURLInstance.get(url)
        console.log(response,"response")

        const data = await response.data
        console.log(baseURLInstance);
        console.log(data,"data")

        console.log(response.status)
        if (response.status === 200){
            return { status: true, data: data }
        } 
        else{
            return {status: false}
        }
    }
    catch(e){
        console.error("Network error", e)
        return { status: false }
    }
}

export {accountValidator}


