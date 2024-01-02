import { useSearchParams } from "react-router-dom"
import { filter } from "./utils/filter"

export default function FilterPage() {
    let [searchParams, setSearchParams] = useSearchParams()

    const filters = {
        type: ['telephone', 'headset', 'computer', 'laptop'],
        color: ['blue', 'white', 'black', 'red', 'yellow green'],
        brand: ['apple', 'samsung', 'huawei']
    }

    return (
        <div className="filter-page">
            <div className="filters">
                {Object.keys(filters).map((keyName, keyNameIndex) =>
                    <div className="filters-item" key={keyNameIndex}>
                        {filters[keyName].map((value, index) =>
                            <label htmlFor={`${keyName}-${value}`} value={value} key={index}>
                                <input defaultChecked={searchParams.has(keyName, value)} onChange={(e) => filter([keyName, value], searchParams, setSearchParams)} id={`${keyName}-${value}`} type="checkbox" />
                                <span>{value}</span>
                            </label>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}