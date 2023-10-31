import { MenuItem } from '@mui/material'
import React from 'react'
import translation, { vehicleTypes } from '../../store/translation'
import FormikSelect from '../formikcomponents/FormikSelect'
import FormikTextField from '../formikcomponents/FormikTextField'
import styled from '@emotion/styled'

function RealEstateItem({ index }) {
    const realEstateDataName = `real_estate_data[${index}]`
    return (
        <StyledRealEstateItem>
            <FormikSelect
                name={`${realEstateDataName}.type`}
                label={translation.real_estate_data.type}
            >
                {Object.keys(vehicleTypes).map(key =>
                    <MenuItem key={key} value={vehicleTypes[key]}>{vehicleTypes[key]}</MenuItem>
                )}
            </FormikSelect>
            <FormikTextField
                name={`${realEstateDataName}.own_percentage`}
                label={translation.real_estate_data.own_percentage.question} />
        </StyledRealEstateItem>
    )
}

const StyledRealEstateItem = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`

export default RealEstateItem