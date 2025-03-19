const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName: "",
    respositories: [],
    setInfo(gitHubUser){
        this.avatar_url = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setRespositories(respositories){
        this.respositories = respositories
    }
}

export { user }