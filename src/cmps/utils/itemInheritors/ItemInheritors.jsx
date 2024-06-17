import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import translation from '../../../store/translation'
import InheritorsList from './InheritorsList'
import ChooseInheritors from './ChooseInheritors'
import { SiteContext } from '../../../store/context'

function ItemInheritors({ name, showTitle = true }) {
    const [isOpen, setIsOpen] = useState(false)

    const {
        translation
    } = useContext(SiteContext)
    
    const inheritorString = (inheritor) => {
        return `${inheritor.first_name} ${inheritor.last_name}`
    }

    return (
        <StyledWrapper>
            {showTitle &&
                <Typography variant="h2">{translation.inheritorsText}</Typography>
            }
            <InheritorsList
                name={name}
                inheritorString={inheritorString}
                handleOpen={() => setIsOpen(true)}
            />
            <ChooseInheritors
                name={name}
                inheritorString={inheritorString}
                isOpen={isOpen}
                handleClose={() => setIsOpen(false)}
            />
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export default ItemInheritors