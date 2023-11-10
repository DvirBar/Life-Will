import React from 'react'
import { answers } from '../../store/translation'
import FormikButtonSelect from './FormikButtonSelect'
import { ToggleButton, Typography } from '@mui/material'
import styled from '@emotion/styled'
import ButtonSelectItem from './buttonSelect/ButtonSelectItem'

const options = [
    { value: answers.yes, label: answers.yes },
    { value: answers.no, label: answers.no }
]

function YesNoRadio({ name, question }) {
    return (
        <StyledYesNoButton>
            <Typography variant='subtitle1'>{question}</Typography>
            <FormikButtonSelect name={name}>
                {options.map(option =>
                    <ButtonSelectItem key={option.value} value={option.value}>
                        {option.label}
                    </ButtonSelectItem>
                )}
            </FormikButtonSelect>
        </StyledYesNoButton>

    )
}

const StyledYesNoButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
`

export default YesNoRadio