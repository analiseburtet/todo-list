import {getCookies, setCookies} from "../utils/cookies.utils";
import {useState} from "react";

const useCookies = <T>(initValue: T, key: string): [T, (value:T) => void] => {
    const init:T = getCookies(key) || initValue
    const [ value, _setValue ] = useState(init)

    const setValue = (newValue:T) => {
        setCookies(newValue, key)
        _setValue(newValue)
    }

    return [
        value,
        setValue
    ]
}

export default useCookies
