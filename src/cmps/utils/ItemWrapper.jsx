import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

function ItemWrapper({ title, children }) {
    return (
        <StyledWrapper>
            <Typography variant="h2">{title}</Typography>
            {children}
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default ItemWrapper