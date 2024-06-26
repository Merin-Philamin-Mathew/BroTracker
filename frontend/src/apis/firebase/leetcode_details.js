import { LEETCODE_URL_INSTANCE } from "../axios_instance"
import URLS from "../urls"

async function leetcodeDetails(val, data) {

    try{
        val.leetcodeDetails.active_days = data.data.submissionCalendar
        const solved = await leetCodeFetching(LEETCODE_URL_INSTANCE, URLS.LEETCODE.solved(val.leetcodeUsername))     
        const badges = await leetCodeFetching(LEETCODE_URL_INSTANCE, URLS.LEETCODE.badges(val.leetcodeUsername))
        val.leetcodeDetails.problems.hardSolved = solved.hardSolved          
        val.leetcodeDetails.problems.mediumSolved = solved.mediumSolved          
        val.leetcodeDetails.problems.easySolved = solved.easySolved          
        val.leetcodeDetails.problems.solvedProblem = solved.solvedProblem  

        val.leetcodeDetails.badges = badges.badgesCount  
        
        
    }
    catch(e){
        console.error("Network error", e)
        return { status: false }
    }
}

async function leetCodeFetching(baseURLInstance, url){
    try{
        const response = await baseURLInstance.get(url)
        console.log(response,"leetcode url: ",url,);
        return response.data
    }
    catch(e){

    }
}


export {leetcodeDetails}