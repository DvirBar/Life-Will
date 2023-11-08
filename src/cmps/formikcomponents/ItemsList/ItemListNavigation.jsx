import styled from '@emotion/styled'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'

function ItemListNavigation({ title, index, numElements, moveNextIndex, movePrevIndex }) {
    const displayTitle = `${title} ${index + 1}/${numElements}`

    if (numElements === 0) {
        return <Typography variant="h3">אין נתונים עדיין. לחצו על ״הוספה״</Typography>
    }

    return (
        <StyledItemListNavigation>
            <StyledStepsHeader>
                <IconButton disabled={index <= 0} onClick={movePrevIndex}>
                    <ChevronRight />
                </IconButton>
                <div>
                    {displayTitle}
                </div>
                <IconButton disabled={index + 1 >= numElements} onClick={moveNextIndex}>
                    <ChevronLeft />
                </IconButton>
            </StyledStepsHeader>
        </StyledItemListNavigation>
    )
}


const StyledItemListNavigation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledStepsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: #662A68;
    gap: 10px;
`

export default ItemListNavigation