import { Button, Typography } from '@mui/material'
import React from 'react'

function ButtonSelectItem({ children, value, selected, onClick }) {
    return (
        <Button
            onClick={onClick}
            variant={value === selected ? "contained" : "outlined"}
            size="large"
            disableElevation>
            <Typography>
                {children}
            </Typography>
        </Button>
    )
}


export default ButtonSelectItem