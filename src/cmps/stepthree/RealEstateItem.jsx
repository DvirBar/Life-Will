import { MenuItem } from '@mui/material'
import React from 'react'
import translation, { realEstateDetailsFieldTypes, realEstateTypes, realEstateTypesDetailsMap } from '../../store/translation'
import FormikSelect from '../formikcomponents/FormikSelect'
import FormikTextField from '../formikcomponents/FormikTextField'
import styled from '@emotion/styled'

function RealEstateItem({ dataItem, itemName }) {

    const type = dataItem.type
    const typeDetails = realEstateTypesDetailsMap(type)
    return (
        <StyledRealEstateItem>
            <FormikSelect
                name={`${itemName}.type`}
                label={translation.real_estate_data.type}
            >
                {Object.keys(realEstateTypes).map(key =>
                    <MenuItem key={key} value={realEstateTypes[key]}>{realEstateTypes[key]}</MenuItem>
                )}
            </FormikSelect>
            <FormikTextField
                name={`${itemName}.own_percentage`}
                label={translation.real_estate_data.own_percentage.question} />

            {typeDetails.length > 0 &&
                <StyledTypeDetails>
                    <StyledTypeDetailsTitle>פרטים</StyledTypeDetailsTitle>
                    <StyledTypeDetailsContent>
                        {Object.keys(realEstateDetailsFieldTypes).map(key =>
                            typeDetails.includes(realEstateDetailsFieldTypes[key]) &&
                            <FormikTextField
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


        </StyledRealEstateItem>
    )
}

const StyledRealEstateItem = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`

const StyledTypeDetails = styled.div`
    flex-basis: 100%;
`

const StyledTypeDetailsContent = StyledRealEstateItem

const StyledTypeDetailsTitle = styled.div`
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 10px;
`

const StyledLandDescription = styled(FormikTextField)`
    flex-basis: 100%;
    width: 100%;
`
export default RealEstateItem