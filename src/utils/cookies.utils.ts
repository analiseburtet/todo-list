import { parseCookies, setCookie } from 'nookies'

const getCookies = <T>(key:string):T => {
    const config = (value:string) => {
        return value === 'undefined' ? '' : value
    }

    return JSON.parse(config(parseCookies()[key]) || 'false') as T
}

const setCookies = <T>(value: T,key:string) => {
    setCookie(null, key, JSON.stringify(value), {
        maxAge: 10 * 365 * 24 * 60 * 60, // 10 years duration
        path: '/'
    })
}

export {
    getCookies,
    setCookies
}
