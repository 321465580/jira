import { useEffect, useState } from "react"

// 当页面第一次加载的时候去调用的函数
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}

// 防抖函数
export const useDebounce = <V>(value: V, delay = 300) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        // 在每次value值变化的时候，去设置一个定时器
        let timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        // 在返回的时候去清楚定时器
        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debounceValue
}