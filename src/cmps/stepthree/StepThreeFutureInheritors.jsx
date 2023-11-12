import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import translation from '../../store/translation'
import ItemInheritors from '../utils/itemInheritors/ItemInheritors'
import FormWrapper from '../utils/FormWrapper'
import FormikTextField from '../formikcomponents/FormikTextField'

function StepThreeFutureInheritors() {
    // TODO: can it be empty?
    return (
        <FormWrapper
            renderItem={() => {
                return (
                    <StyledWrapper>
                        <Typography variant="subtitle1">
                            {translation.future_real_estate}
                        </Typography>
                        <ItemInheritors
                            showTitle={false}
                            name="future_real_estate_data.inheritors" />
                        <FormikTextField
                            name="future_real_estate_data.remarks"
                            label={translation.future_real_estate_data.remarks}
                            fullWidth
                            multiline
                            rows={6}
                        />
                    </StyledWrapper>
                )
            }} />
    )
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default StepThreeFutureInheritors