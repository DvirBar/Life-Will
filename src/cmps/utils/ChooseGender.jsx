import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import FormikButtonSelect from '../formikcomponents/FormikButtonSelect'
import { genderTypes } from '../../store/translation'
import ButtonSelectItem from '../formikcomponents/buttonSelect/ButtonSelectItem'
import styled from '@emotion/styled'
import { SiteContext } from '../../store/context'

function ChooseGender({ name }) {
    const {
        setSelectedGender,
        translation
    } = useContext(SiteContext)
  
    return (
        <StyledChooseGender>
            <Typography variant="subtitle1">מגדר</Typography>
            <FormikButtonSelect
                name={name}
                label={translation[name]}
                setValue={setSelectedGender}
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