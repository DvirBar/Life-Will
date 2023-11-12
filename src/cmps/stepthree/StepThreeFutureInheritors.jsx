import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import translation from '../../store/translation'
import ItemInheritors from '../utils/itemInheritors/ItemInheritors'
import FormWrapper from '../utils/FormWrapper'

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
                    </StyledWrapper>
                )
            }} />
    )
}

const StyledWrapper = styled.div``

export default StepThreeFutureInheritors