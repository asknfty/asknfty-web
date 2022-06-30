export const STORAGE = {
    LANGUAGE: 'LANGUAGE',
    USER_TOKEN: 'USER_TOKEN',
    META_DATA: 'META_DATA',
    WORKSPACE_ID: 'WORKSPACE_ID'
}

export function getLocalStorage(key) {
    return localStorage.getItem(key)
}

export function setLocalStorage(key, value) {
    return localStorage.setItem(key, value)
}

export function removeLocalStorage(key) {
    return localStorage.removeItem(key)
}
