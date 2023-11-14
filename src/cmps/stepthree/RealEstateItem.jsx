import { Typography } from '@mui/material'
import React from 'react'
import translation, { realEstateDetailsFieldTypes, realEstateTypes, realEstateTypesDetailsMap } from '../../store/translation'
import FormikTextField from '../formikcomponents/FormikTextField'
import styled from '@emotion/styled'
import ItemInheritors from '../utils/itemInheritors/ItemInheritors'
import ItemType from '../utils/InheritedItem/ItemType'

function RealEstateItem({ dataItem, itemName }) {
    const type = dataItem.type
    const typeDetails = realEstateTypesDetailsMap(type)

    return (
        <StyledRealEstateItem>
            <ItemType
                name="real_estate"
                itemDataName="real_estate_data"
                itemName={itemName}
            />
            <StyledPercentageDisplay>
                <Typography variant="subtitle1">{translation.real_estate_data.own_percentage.question}</Typography>
                <FormikTextField
                    percent
                    name={`${itemName}.own_percentage`}
                    label={translation.real_estate_data.own_percentage.answer} />
            </StyledPercentageDisplay>

            {typeDetails.length > 0 &&
                <StyledTypeDetails>
                    <Typography variant="subtitle1">פרטים-</Typography>
                    <StyledTypeDetailsContent>
                        {Object.keys(realEstateDetailsFieldTypes).map(key =>
                            typeDetails.includes(realEstateDetailsFieldTypes[key]) &&
                            <FormikTextField
                                key={`${itemName}.details.${key}`}
                                name={`${itemName}.details.${key}`}
                                label={translation.real_estate_data.details[key]} />
                        )}
                    </StyledTypeDetailsContent>
                </StyledTypeDetails>
            }

            {type === realEstateTypes.lands &&
                <StyledLandDescription
                    name={`${itemName}.description`}
                    label={translation.real_estate_data.description}
                    fullWidth
                />
            }

            <ItemInheritors name={`${itemName}.inheritors`} />
        </StyledRealEstateItem>
    )
}

const StyledRealEstateItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
`

const StyledTypeDetails = styled.div`
    flex-basis: 100%;
`

const StyledTypeDetailsContent = styled(StyledRealEstateItem)`
    flex-direction: row;
`

const StyledTypeDetailsTitle = styled.div`
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 10px;
`

const StyledLandDescription = styled(FormikTextField)`
    flex-basis: 100%;
    width: 100%;
`

const StyledPercentageDisplay = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
`

export default RealEstateItem