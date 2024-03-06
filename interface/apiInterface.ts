export interface ApiUser {
    reloadUserInfo: ApiReloadUserInfo,
    uid: string
}

interface ApiReloadUserInfo {
    createdAt: string,
    displayName: string,
    photoUrl: string,
    screenName: string,
}