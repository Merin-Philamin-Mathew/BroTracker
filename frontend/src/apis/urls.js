
const URLS = {
    GIT:{
        profile: (githubUsername)=>`/users/${githubUsername}`,
        events: (githubUsername)=>`/users/${githubUsername}/events`,
    },
    MONKEYTYPE : {
        profile: (monkeytypeUsername)=>`/users/${monkeytypeUsername}/profile`
    },
    LEETCODE : {
        profile: (leetcodeUsername)=> `/${leetcodeUsername}`,
        calender: (leetcodeUsername) => `/${leetcodeUsername}/calendar`
    }
}

export default URLS

