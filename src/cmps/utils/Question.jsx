import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

function Question({ question, children }) {
    return (
        <StyledQuestion>
            <Typography variant="subtitle1">{question}</Typography>
            {children}
        </StyledQuestion>
    )
}

const StyledQuestion = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: flex-start;
`

export default Question