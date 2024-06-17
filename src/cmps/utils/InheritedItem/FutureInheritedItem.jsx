import styled from '@emotion/styled'
import React, { useContext } from 'react'
import FormWrapper from '../FormWrapper'
import { inheritedItemValidation } from '../validation'
import { Typography } from '@mui/material'
import ItemInheritors from '../itemInheritors/ItemInheritors'
import FormikTextField from '../../formikcomponents/FormikTextField'
import { SiteContext } from '../../../store/context'

function FutureInheritedItem({ name }) {
    const {
        translation
    } = useContext(SiteContext)
    
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
                name={`${name}_data.[0].inheritors`} />
            <FormikTextField
                name={`${name}_data.[0].remarks`}
                label={translation[`${name}_data`].remarks}
                fullWidth
                multiline
                rows={6}
            />
        </FormWrapper>




    )
}

export default FutureInheritedItem