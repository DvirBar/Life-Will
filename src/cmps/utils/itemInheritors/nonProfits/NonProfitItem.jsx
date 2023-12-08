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
                <StyledLeftItems>
                    <Typography variant="body1">
                        {id}
                    </Typography>
                    {arrayHelpers &&
                        <IconButton onClick={() => arrayHelpers.remove(index)}>
                            <Delete />
                        </IconButton>
                    }
                </StyledLeftItems>

            </StyledResultItem>
        </Tooltip>
    )
}

const StyledResultItem = styled.div`
    font-size: 0.85rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    height: 3rem;

    @media(max-width: 500px) {
        flex-direction: column;
        height: 5rem;
        align-items: flex-start;
    }
`

const StyledLeftItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 500px) {
        width: 100%;
    }
`

const StyledNonProfitNameText = styled(Typography)`
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
`

export default NonProfitItem