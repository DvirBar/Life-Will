import styled from '@emotion/styled'
import React from 'react'
import FormWrapper from '../FormWrapper'
import { inheritedItemValidation } from '../validation'
import { Typography } from '@mui/material'
import translation from '../../../store/translation'
import ItemInheritors from '../itemInheritors/ItemInheritors'
import FormikTextField from '../../formikcomponents/FormikTextField'

function FutureInheritedItem({ name }) {
    return (
        <FormWrapper
            isFinalStep={true}
            validationSchema={inheritedItemValidation(name, true)}
        >
            <Typography variant="subtitle1">
                {translation[name]}
            </Typography>
            <ItemInheritors
                showTitle={false}
                name={`${name}_data.inheritors`} />
            <FormikTextField
                name={`${name}_data.remarks`}
                label={translation[`${name}_data`].remarks}
                fullWidth
                multiline
                rows={6}
            />
        </FormWrapper>




    )
}

export default FutureInheritedItem