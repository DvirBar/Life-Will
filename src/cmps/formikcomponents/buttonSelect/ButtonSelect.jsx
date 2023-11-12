import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

function ButtonSelect({ value, onChange, children, error }) {
    const handleChange = (e, newValue) => {
        if (newValue !== value) {
            onChange(e, newValue)
        }
    }

    return (
        <StyledButtonSelect isError={error}>
            <StyledButtonsContainer>
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
            </StyledButtonsContainer>
            <StyledError>{error}</StyledError>
        </StyledButtonSelect>
    )
}

const StyledButtonSelect = styled("div")(({ theme, isError }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    borderRadius: "5px",
    transition: "borderColor 200ms ease-out",
    gap: "0.5rem",
    border: `2px solid ${isError ? theme.palette.error.light : "transparent"}`
}))


const StyledButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

const StyledError = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.light,
    fontSize: "0.85rem",
    fontWeight: 500
}))

export default ButtonSelect