import styled from '@emotion/styled'
import { ArrowForward } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import NonProfitsSearchList from './NonProfitsSearchList'

function FindNonProfits({ name, isOpen, handleClose }) {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <StyledFindNonProfits isOpen={isOpen}>
            <StyledSearchBoxWrapper>
                <Button onClick={handleClose}>
                    <ArrowForward />
                    <Typography variant="subtitle1">חזרה</Typography>
                </Button>

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
            />
        </StyledFindNonProfits>
    )
}

const StyledFindNonProfits = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 1rem;
    width: 100%;
    top: 0rem;
    right: 0rem;
    z-index: 4;
    background-color: #fff;
    width: 100%;
    visibility: ${({ isOpen }) => isOpen ? "visible" : "hidden"};
    height:  100%;
    padding: 1rem;
    border-radius: 10px;
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: all 200ms ease-in-out;
`

const StyledSearchBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
`


export default FindNonProfits