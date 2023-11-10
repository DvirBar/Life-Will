import styled from '@emotion/styled'
import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

function Item({ children, onDelete }) {
    return (
        <StyledItem>
            <StyledHeader>
                <IconButton onClick={onDelete} color='danger'>
                    <Delete />
                </IconButton>
            </StyledHeader>

            <StyledContentContainer>
                {children}
            </StyledContentContainer>
        </StyledItem>
    )
}

const StyledItem = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 30px;
    width: 100%;
`

const StyledContentContainer = styled.div`
    padding: 10px;
`
const StyledHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
`

export default Item