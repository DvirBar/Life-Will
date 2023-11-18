import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import translation from '../../../store/translation'
import InheritorsList from './InheritorsList'
import ChooseInheritors from './ChooseInheritors'

function ItemInheritors({ name, showTitle = true }) {
    const [isOpen, setIsOpen] = useState(false)
    const inheritorString = (inheritor) => {
        return `${inheritor.first_name} ${inheritor.last_name}`
    }

    return (
        <div>
            {showTitle &&
                <Typography variant="subtitle1">{translation.inheritorsText}-</Typography>
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
        </div>
    )
}

export default ItemInheritors