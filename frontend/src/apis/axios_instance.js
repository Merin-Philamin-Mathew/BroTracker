import axios from "axios"
// process.env.REACT_APP_BASEURL_GITHUB ="https://api.github.com",
// process.env.REACT_APP_BASEURL_LEETCODE = "https://alfa-leetcode-api.onrender.com/",
// process.env.REACT_APP_BASEURL_MONKEYTYPE ="https://api.monkeytype.com" ,


console.log(process.env.REACT_APP_BASEURL_GITHUB);

const githubUrl= process.env.REACT_APP_BASEURL_GITHUB
console.log(githubUrl);

const GIT_URL_INSTANCE = axios.create({
    baseURL:process.env.REACT_APP_BASEURL_GITHUB,
})

const LEETCODE_URL_INSTANCE = axios.create({
    baseURL: process.env.REACT_APP_BASEURL_LEETCODE 
})

const MONKEYTYPE_URL_INSTANCE = axios.create({
    baseURL: process.env.REACT_APP_BASEURL_MONKEYTYPE
})


export { GIT_URL_INSTANCE, LEETCODE_URL_INSTANCE, MONKEYTYPE_URL_INSTANCE}