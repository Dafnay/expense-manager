export const getLocalStorageItem = (key:string) => {
    // @ts-ignore
    return JSON.parse(window.localStorage.getItem(key))
}

export const setLocalStorageItem = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}
