import styled from '@emotion/styled'
import React, { useContext } from 'react'
import ItemType from './ItemType'
import { itemDetails } from '../../../store/translation'
import { Typography } from '@mui/material'
import FormikTextField from '../../formikcomponents/FormikTextField'
import ItemInheritors from '../itemInheritors/ItemInheritors'
import hasField from './hasField'
import { SiteContext } from '../../../store/context'

function InheritedItem({ name, itemDataName, itemName }) {
    /* 
        Example:
            name - vehicle
            itemDataName - vehicle_data
            itemName - vehicle_data[0]
    */

    const {
        translation
    } = useContext(SiteContext)

    return (
        <StyledInheritedItem>
            <ItemType
                name={name}
                itemDataName={itemDataName}
                itemName={itemName}
            />
            {itemDetails[name] &&
                <StyledTypeDetails>
                    <Typography variant="subtitle1">פרטים-</Typography>
                    <StyledTypeDetailsContent>
                        {Object.keys(itemDetails[name]).map((key) =>
                            <FormikTextField
                                key={`${itemName}.details.${key}`}
                                name={`${itemName}.details.${key}`}
                                label={translation[itemDataName].details[key]}
                            />
                        )}
                    </StyledTypeDetailsContent>
                </StyledTypeDetails>
            }

            <ItemInheritors name={`${itemName}.inheritors`} />

            {hasField("remarks", name) &&
                <FormikTextField
                    name={`${itemName}.remarks`}
                    label={translation[itemDataName].remarks}
                    fullWidth
                    multiline
                    rows={6}
                />
            }


        </StyledInheritedItem>
    )
}

const StyledInheritedItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;      
`

const StyledTypeDetails = styled.div`
    flex-basis: 100%;
`

const StyledTypeDetailsContent = styled(StyledInheritedItem)`
    flex-direction: row;
`

export default InheritedItem