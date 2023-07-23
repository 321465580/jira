export const isFalsy  = (value: unknown) => value === 0 ? false: !value

// 在一个函数中，不要去改变传入的对象，会污染对象，所以要新建一个res

export const clearObject = (obj?: { [key: string]: unknown }) => {
    const res = {...obj}
    Object.keys(res).forEach(key => {
        const value = res[key]
        // 0 是特殊的
        if(isFalsy(value)) {
            delete res[key]
        }
    })
    return res
}