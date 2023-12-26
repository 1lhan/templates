import { computed } from "@preact/signals-react";

export default function CustomSelect({ id, state, options }) {
    const currentValue = computed(() => state.value.replaceAll('-', ' '))

    const currentValueBg = '#2b3b69'
    const currentValueBorderBg = '#066edd'
    const valuesDivBg = '#1f2a48'
    const optionHoverBg = '#405691'

    return (
        <div className="custom-select">
            <input id={id} className="checkbox" type="checkbox" />
            <label className="current-value" htmlFor={id} style={{ background: currentValueBg, border: `1px solid ${currentValueBorderBg}` }}>
                <span>{currentValue}</span>
                <i className="fa-solid fa-caret-up" />
                <i className="fa-solid fa-caret-down" />
            </label>
            <div className="values" style={{ background: valuesDivBg }}>
                {options.map((option, index) =>
                    <label key={index} htmlFor={id} onClick={() => state.value = option}
                        onMouseOver={(e) => e.target.style.background = optionHoverBg} onMouseOut={(e) => e.target.style.background = ''}>
                        {option.replaceAll('-', ' ')}
                    </label>
                )}
            </div>
        </div>
    )
}