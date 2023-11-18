import styled from '@emotion/styled'
import { Search } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import React from 'react'

function NonProfitsList({ openSearch }) {
    return (
        <StyledNonProfitsList>
            <Typography variant="subtitle1">
                עמותות
            </Typography>
            <Button onClick={openSearch} variant="contained">
                <Search />&nbsp;
                <Typography variant="subtitle1">
                    חיפוש עמותה
                </Typography>
            </Button>
        </StyledNonProfitsList>
    )
}

const StyledNonProfitsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background-color: #fff;
    height: 100%;
`

const StyledSearchBoxWrapper = styled.div`
`



export default NonProfitsList