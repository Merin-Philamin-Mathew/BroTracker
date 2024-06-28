
const URLS = {
    GIT:{
        profile: (githubUsername)=>`/users/${githubUsername}`,
        events: (githubUsername)=>`/users/${githubUsername}/events`,
        repos: (githubUsername)=>`/users/${githubUsername}/repos`,
    },
    MONKEYTYPE : {
        profile: (monkeytypeUsername)=>`/users/${monkeytypeUsername}/profile`
    },
    LEETCODE : {
        profile: (leetcodeUsername)=> `/${leetcodeUsername}`,
        calender: (leetcodeUsername) => `/${leetcodeUsername}/calendar`,
        solved: (leetcodeUsername) => `/${leetcodeUsername}/solved`,
        badges: (leetcodeUsername) => `/${leetcodeUsername}/badges`,
    }
}

export default URLS

