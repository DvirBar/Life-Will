import styled from '@emotion/styled'
import React from 'react'

function ButtonSelect({ value, onChange, children }) {
    const handleChange = (e, newValue) => {
        if (newValue !== value) {
            onChange(e, newValue)
        }
    }

    return (
        <StyledButtonSelect>
            {/* eslint-disable-next-line no-undef */}
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) {
                    return null
                }

                return React.cloneElement(child, {
                    selected: value,
                    onClick: e => handleChange(e, child.props.value)
                })
            })}
        </StyledButtonSelect>
    )
}

const StyledButtonSelect = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

export default ButtonSelect