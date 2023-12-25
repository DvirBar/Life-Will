import { Button, Typography } from '@mui/material'
import React from 'react'

function ButtonSelectItem({ children, value, isSelected, onClick }) {
    return (
        <Button
            onClick={onClick}
            variant={isSelected ? "contained" : "outlined"}
            size="large"
            disableElevation>
            <Typography>
                {children}
            </Typography>
        </Button>
    )
}


export default ButtonSelectItem