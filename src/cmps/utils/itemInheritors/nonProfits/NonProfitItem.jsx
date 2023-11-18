import styled from '@emotion/styled'
import { Delete } from '@mui/icons-material'
import { IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'

function NonProfitItem({ name, id, arrayHelpers, index }) {
    // TODO: make it look better
    return (
        <Tooltip title={name}>
            <StyledResultItem variant="subtitle1">
                <StyledNonProfitNameText variant="subtitle1">
                    {name}
                </StyledNonProfitNameText>
                <Typography variant="body1">
                    {id}
                </Typography>
                {arrayHelpers &&
                    <IconButton onClick={() => arrayHelpers.remove(index)}>
                        <Delete />
                    </IconButton>
                }
            </StyledResultItem>
        </Tooltip>
    )
}

const StyledResultItem = styled.div`
    font-size: 0.85rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    height: 3rem;
`

const StyledNonProfitNameText = styled(Typography)`
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export default NonProfitItem