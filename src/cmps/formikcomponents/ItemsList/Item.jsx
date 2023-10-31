import styled from '@emotion/styled'
import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

function Item({ children, onDelete, title, index, numElements }) {
    const displayTitle = `${title} ${index + 1}/${numElements}`
    return (
        <StyledItem>
            <StyledHeader>
                <IconButton onClick={onDelete} color='danger'>
                    <Delete />
                </IconButton>
                <StyledItemTitle>{displayTitle}</StyledItemTitle>
                <div></div>
            </StyledHeader>

            <StyledContentContainer>
                {children}
            </StyledContentContainer>
        </StyledItem>
    )
}

const StyledItemTitle = styled.div`
    font-size: 20px;
    color: #888;
    font-weight: bold;
`

const StyledItem = styled.div`
    box-shadow: 0px 0px 12px #ccc;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 30px;
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