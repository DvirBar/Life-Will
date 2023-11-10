import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import translation from '../../../store/translation'
import ChooseInheritors from './ChooseInheritors'
import InheritorsList from './InheritorsList'

function ItemInheritors({ name }) {

    const inheritorString = (inheritor) => {
        return `${inheritor.first_name} ${inheritor.last_name} (${inheritor.type})`
    }
    return (
        <div>
            <Typography variant="subtitle1">{translation.inheritorsText}-</Typography>
            <StyledInheritorsContainer>
                <ChooseInheritors name={name} inheritorString={inheritorString} />
                <InheritorsList name={name} inheritorString={inheritorString} />
            </StyledInheritorsContainer>

        </div>
    )
}

const StyledInheritorsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: stretch;
`

export default ItemInheritors