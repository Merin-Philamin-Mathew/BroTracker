

// get data
async function getGitHUb(Username) {
    // Merin-Philamin-Mathew
  
    try{
        const response = await fetch(`users/${Username}/events`)
        const data = await response.json()
        console.log(response.status)
        if (response.status === 200){
            return { status: true, events: data }
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

export {getGitHUb}