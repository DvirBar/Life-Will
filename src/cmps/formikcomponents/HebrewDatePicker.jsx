import React from 'react'
import { HebrewDayInput } from './hebrew-day-input'
import { HebrewMonthInput } from './hebrew-month-input'
import FormikTextField from './FormikTextField'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'

function HebrewDatePicker({ name, label }) {
    return (
        <StyledWrapper>
            <Typography variant="subtitle1">{label}</Typography>
            <StyledHebrewDateItems>
                <HebrewDayInput name={`${name}.day`} label={"יום"} />
                <HebrewMonthInput name={`${name}.month`} label={"חודש"} />
                <FormikTextField name={`${name}.year`} label={"שנה"} />
            </StyledHebrewDateItems>
        </StyledWrapper>

    )
}

const StyledHebrewDateItems = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default HebrewDatePicker