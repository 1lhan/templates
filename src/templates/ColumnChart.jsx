import { useState } from "react";

export default function ColumnChart({ data, headerText, valueKey }) {
    const topPoint = +(data.slice().sort((a, b) => b[valueKey] - a[valueKey])[0][valueKey] * 1.25)
    const [toolTipValue, setToolTipValue] = useState({})

    const fontColor = '#fff';
    const headerBg = '#0d2053';
    const chartBg = '#1f2a48';
    const columnsBg = '#066edd';
    const toolTipBg = '#405691';

    const styles = {
        columnChartWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '1%',
            width: '100%',
            height: '100%',
            color: fontColor,
            backgroundColor: chartBg
        },
        chartHeader: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '0 0.5rem',
            width: '100%',
            height: '15%',
            backgroundColor: headerBg
        },
        chartBody: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            position: 'relative',
            width: '99%',
            height: '83%',
        },
        valueWrapper: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: '100%',
        },
        toolTip: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '0.25rem',
            position: 'absolute',
            top: 'calc(100% + 0.25rem)',
            padding: '0.5rem',
            borderRadius: '3px'
        },
        toolTipChildren: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '0.5rem',
            width: '100%',
            whiteSpace: 'nowrap',
        },
        toolTipChildrenSpan1: {
            color: '#dfdfdf',
        },
        toolTipChildrenSpan2: {
            fontWeight: '600',
        }
    }

    return (
        <div style={styles.columnChartWrapper} className="column-chart-wrapper">
            <div style={styles.chartHeader} className="chart-header">{headerText}</div>
            <div style={styles.chartBody} className="chart-body">
                {data.map((item, index) =>
                    <div key={index} style={{ ...styles.valueWrapper, width: (100 / data.length) + '%' }} className="value-wrapper">
                        <div
                            className="value" style={{ width: '50%', height: ((item[valueKey] / topPoint) * 100) + '%', backgroundColor: columnsBg }}
                            onMouseOver={() => setToolTipValue({ index, item, left: `calc(${((100 / data.length) * index) + ((100 / data.length) * 0.5)}%)` })}
                            onMouseLeave={() => setToolTipValue({})}
                        />
                    </div>
                )}

                {toolTipValue.index >= 0 &&
                    <div className="tool-tip"
                        style={{ ...styles.toolTip, left: toolTipValue.left, transform: toolTipValue.index < data.length / 2 ? 'translateX(0)' : 'translateX(-100%)', backgroundColor: toolTipBg }}>
                        {Object.keys(toolTipValue.item).map((item, index) =>
                            <span className="tool-tip-children" style={styles.toolTipChildren} key={index}>
                                <span style={styles.toolTipChildrenSpan1}>{item.split('-').map(item => item = item.slice(0, 1).toUpperCase() + item.slice(1)).join(' ')}</span>
                                <span style={styles.toolTipChildrenSpan2}>{Object.values(toolTipValue.item)[index]}</span>
                            </span>
                        )}
                    </div>
                }
            </div>
        </div >
    )
}

//