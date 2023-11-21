import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SiteContext } from '../../../store/context'
import FormikTextField from '../../formikcomponents/FormikTextField'
import styled from '@emotion/styled'
import { StyledPercentInput } from './InheritorsList'

function InheritorsListItem({ name, index, inheritorString, inheritorItem }) {
    const {
        getInheritorById
    } = useContext(SiteContext)

    const inheritor = inheritorItem.uuid ? getInheritorById(inheritorItem.uuid) : inheritorItem

    return (
        <StyledInheritorsListItem>
            <Typography variant="body1">{inheritorString(inheritor)}</Typography>
            <StyledPercentInput>
                <div>%</div>
                <FormikTextField
                    percent
                    name={`${name}[${index}].percent`} />
            </StyledPercentInput>
        </StyledInheritorsListItem>
    )
}

const StyledInheritorsListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
`

export default InheritorsListItem