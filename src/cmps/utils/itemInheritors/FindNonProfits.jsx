import styled from '@emotion/styled'
import { ArrowForward } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'
import React from 'react'

function FindNonProfits({ isOpen, handleClose }) {

    return (
        <StyledFindNonProfits isOpen={isOpen}>
            <StyledSearchBoxWrapper>
                <IconButton onClick={handleClose}>
                    <ArrowForward />
                </IconButton>

                <TextField
                    fullWidth
                    label="חיפוש עמותות"
                />
            </StyledSearchBoxWrapper>
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
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`


export default FindNonProfits