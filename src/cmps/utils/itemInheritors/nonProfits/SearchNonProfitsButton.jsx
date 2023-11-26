import { Search } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import React from 'react'

function SearchNonProfitsButton({ openSearch }) {
    return (
        <Button onClick={openSearch} variant="contained">
            <Search />&nbsp;
            <Typography variant="subtitle1">
                חיפוש עמותה
            </Typography>
        </Button>
    )
}

export default SearchNonProfitsButton