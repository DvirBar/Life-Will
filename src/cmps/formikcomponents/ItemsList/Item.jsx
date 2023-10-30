import styled from '@emotion/styled'
import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

function Item({ children, onDelete }) {
    return (
        <StyledItem>
            <StyledDeleteIcon onClick={onDelete} color='danger'>
                <Delete />
            </StyledDeleteIcon>
            <div>
                {children}
            </div>
        </StyledItem>
    )
}

const StyledItem = styled.div`
    box-shadow: 0 0 6 #000;
`
const StyledDeleteIcon = styled(IconButton)`
    display: flex;
    justify-content: flex-start;
`

export default Item