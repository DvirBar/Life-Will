import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

function FormError({ children }) {
    return (
        <StyledError>{children}</StyledError>
    )
}

const StyledError = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.light,
    fontSize: "0.85rem",
    fontWeight: 500
}))

export default FormError