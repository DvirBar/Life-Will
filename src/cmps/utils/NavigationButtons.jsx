import styled from '@emotion/styled'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SiteContext } from '../../store/context'
import { useFormikContext } from 'formik'

function NavigationButtons() {
    const { goBack } = useContext(SiteContext)
    const { values } = useFormikContext()

    return (
        <StyledWrapper>
            <StyledButton
                onClick={() => goBack(values)}
                color="secondary"
                fullWidth
                variant="outlined">
                <ArrowForward />
                <Typography variant="subtitle1">חזרה</Typography>
            </StyledButton>
            <StyledButton
                color="secondary"
                fullWidth
                type="submit"
                variant="contained">
                <Typography variant="subtitle1">המשך</Typography>
                <ArrowBack />
            </StyledButton>
        </StyledWrapper>
    )
}


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`

const StyledButton = styled(Button)`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

export default NavigationButtons