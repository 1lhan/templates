import { useSignal } from "@preact/signals-react";
import ColumnChart from "./templates/ColumnChart";
import CustomSelect from "./templates/CustomSelect";
import LineChart from "./templates/LineChart";

export default function Home() {
    const data = [
        { date: "01.01.2023", value: 42 }, { date: "02.01.2023", value: 73 }, { date: "03.01.2023", value: 17 }, { date: "04.01.2023", value: 89 }, { date: "05.01.2023", value: 12 },
        { date: "06.01.2023", value: 56 }, { date: "07.01.2023", value: 28 }, { date: "08.01.2023", value: 95 }, { date: "09.01.2023", value: 64 }, { date: "10.01.2023", value: 37 },
        { date: "11.01.2023", value: 81 }, { date: "12.01.2023", value: 23 }, { date: "13.01.2023", value: 49 }, { date: "14.01.2023", value: 76 }, { date: "15.01.2023", value: 14 },
        { date: "16.01.2023", value: 68 }, { date: "17.01.2023", value: 33 }, { date: "18.01.2023", value: 92 }, { date: "19.01.2023", value: 45 }, { date: "20.01.2023", value: 60 },
        { date: "21.01.2023", value: 19 }, { date: "22.01.2023", value: 82 }, { date: "23.01.2023", value: 27 }, { date: "24.01.2023", value: 53 }, { date: "25.01.2023", value: 88 },
        { date: "26.01.2023", value: 31 }, { date: "27.01.2023", value: 75 }, { date: "28.01.2023", value: 10 }, { date: "29.01.2023", value: 67 }, { date: "30.01.2023", value: 41 },
        { date: "31.01.2023", value: 50 }
    ]


    const selectFruit = useSignal('select-fruit')

    return (
        <div className="home">
            <div className="line-chart-container">
                <LineChart data={data} headerText='Line Chart' valueKey='value' horizontalAreaKey='date' toolTipKeys={['date', 'value']} dataSliceOptions={[15, 30, 60]} />
            </div>
            <div className="column-chart-container">
                <ColumnChart data={data} headerText='Column Chart' valueKey='value' />
            </div>
            <CustomSelect id={'custom-select'} state={selectFruit} options={['apple', 'banana', 'pear', 'watermelon', 'cherry', 'stawberry']} />
        </div>
    )
}