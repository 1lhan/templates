export const filter = (_value, searchParams, setSearchParams) => {
    // _value iki parametre olmalı, örnek : ['fruit','apple']
    let key = _value[0]
    let value = _value[1]

    let currentSearchParam = searchParams.get(key)

    if (currentSearchParam == null) searchParams.append(key, value)
    else {
        let searchParamValue = currentSearchParam.split('-')
        let valueIndex = searchParamValue.findIndex(item => item == value)

        if (valueIndex == -1) searchParamValue.push(value)
        else searchParamValue.splice(valueIndex, 1)

        searchParams.delete(key)
        searchParamValue.length > 0 && searchParams.append(key, searchParamValue.join('-'))
    }

    setSearchParams(searchParams)
}