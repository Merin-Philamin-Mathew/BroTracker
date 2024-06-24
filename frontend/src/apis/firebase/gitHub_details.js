

// get data
async function getGitHUb(githubUsername) {
    // Merin-Philamin-Mathew
  
    try{
        const response = await fetch(`https://api.github.com/users/${githubUsername}/events`)
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