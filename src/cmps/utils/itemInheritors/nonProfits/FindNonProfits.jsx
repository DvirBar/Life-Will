import styled from '@emotion/styled'
import { ArrowForward } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import NonProfitsSearchList from './NonProfitsSearchList'

function FindNonProfits({ name, handleClose, addNonProfit, displayBackButton }) {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <StyledSearchBoxWrapper>
                {displayBackButton &&
                    <Button onClick={handleClose}>
                        <ArrowForward />
                        <Typography variant="subtitle1">חזרה</Typography>
                    </Button>
                }

                <TextField
                    fullWidth
                    label="חיפוש עמותות"
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </StyledSearchBoxWrapper>
            <NonProfitsSearchList
                name={name}
                searchTerm={searchTerm}
                closeSearch={handleClose}
                onAdd={addNonProfit}
            />
        </>
    )
}



const StyledSearchBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
`


export default FindNonProfits