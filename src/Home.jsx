import { useSignal } from "@preact/signals-react";
import ColumnChart from "./templates/ColumnChart";
import CustomSelect from "./templates/CustomSelect";

export default function Home() {
    const data = [
        { date: "2023.01.01", value: 42 }, { date: "2023.01.02", value: 73 }, { date: "2023.01.03", value: 17 }, { date: "2023.01.04", value: 89 }, { date: "2023.01.05", value: 12 }, { date: "2023.01.06", value: 56 },
        { date: "2023.01.07", value: 28 }, { date: "2023.01.08", value: 95 }, { date: "2023.01.09", value: 64 }, { date: "2023.01.10", value: 37 }, { date: "2023.01.11", value: 81 }, { date: "2023.01.12", value: 23 },
        { date: "2023.01.13", value: 49 }, { date: "2023.01.14", value: 76 }, { date: "2023.01.15", value: 14 }, { date: "2023.01.16", value: 68 }, { date: "2023.01.17", value: 33 }, { date: "2023.01.18", value: 92 },
        { date: "2023.01.19", value: 45 }, { date: "2023.01.20", value: 60 }, { date: "2023.01.21", value: 19 }, { date: "2023.01.22", value: 82 }, { date: "2023.01.23", value: 27 }, { date: "2023.01.24", value: 53 },
        { date: "2023.01.25", value: 88 }, { date: "2023.01.26", value: 31 }, { date: "2023.01.27", value: 75 }, { date: "2023.01.28", value: 10 }, { date: "2023.01.29", value: 67 }, { date: "2023.01.30", value: 41 }
    ]

    const selectFruit = useSignal('select-fruit')

    return (
        <div className="home">
            <div className="column-chart-container">
                <ColumnChart data={data} headerText='Column Chart' valueKey='value' />
            </div>
            <CustomSelect id={'custom-select'} state={selectFruit} options={['apple', 'banana', 'pear', 'watermelon', 'cherry', 'stawberry']} />
        </div>
    )
}