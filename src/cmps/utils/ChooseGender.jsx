import { Typography } from '@mui/material'
import React from 'react'
import FormikButtonSelect from '../formikcomponents/FormikButtonSelect'
import translation, { genderTypes } from '../../store/translation'
import ButtonSelectItem from '../formikcomponents/buttonSelect/ButtonSelectItem'
import styled from '@emotion/styled'

function ChooseGender({ name }) {
    return (
        <StyledChooseGender>
            <Typography variant="subtitle1">מגדר</Typography>
            <FormikButtonSelect
                name={name}
                label={translation[name]}
            >
                {Object.keys(genderTypes).map((key) =>
                    <ButtonSelectItem
                        key={genderTypes[key]}
                        value={genderTypes[key]}
                    >
                        {genderTypes[key]}
                    </ButtonSelectItem>
                )}
            </FormikButtonSelect>
        </StyledChooseGender>
    )
}

const StyledChooseGender = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default ChooseGender