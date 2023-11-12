import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

function Error({ isError, children }) {
    if (!isError) {
        return <></>
    }

    return (
        <StyledError>{children}</StyledError>
    )
}

const StyledError = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.light,
    fontSize: "0.85rem",
    fontWeight: 600,
    alignSelf: "flex-start",
}))

export default Error