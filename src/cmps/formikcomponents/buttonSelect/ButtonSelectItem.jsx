import { Button } from '@mui/material'
import React from 'react'

function ButtonSelectItem({ children, value, selected, onClick }) {
    return (
        <Button
            onClick={onClick}
            variant={value === selected ? "contained" : "outlined"}
            disableElevation>
            {children}
        </Button>
    )
}

export default ButtonSelectItem