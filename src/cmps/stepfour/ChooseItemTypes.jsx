import React, { useContext } from 'react'
import { SiteContext } from '../../store/context'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import ButtonSelect from '../formikcomponents/buttonSelect/ButtonSelect'
import translation, { inheritanceKeysStep4 } from '../../store/translation'
import ButtonSelectItem from '../formikcomponents/buttonSelect/ButtonSelectItem'
import FormWrapper from '../utils/FormWrapper'

function ChooseItemTypes() {
    const {
        chosenItemTypes,
        setChosenItemTypes
    } = useContext(SiteContext)

    const handleChange = (event, selectedValue) => {
        setChosenItemTypes((currVal) => ({
            ...currVal,
            [selectedValue]: !currVal[selectedValue]
        }))
    }

    return (
        <FormWrapper>
            <StyledChooseItemTypes>
                <Typography variant="subtitle1">
                    בחרו את המטלטלין אותו תרצו להוריש:
                </Typography>
                <ButtonSelect
                    value={chosenItemTypes}
                    onChange={handleChange}
                    multiSelect>
                    {Object.keys(inheritanceKeysStep4).map((key) =>
                        (key !== inheritanceKeysStep4.other_inheritance &&
                            key !== inheritanceKeysStep4.future_items) &&
                        <ButtonSelectItem
                            value={key}
                        >{translation[`${key}_title`]}</ButtonSelectItem>
                    )}
                </ButtonSelect>
            </StyledChooseItemTypes>
        </FormWrapper>

    )
}

const StyledChooseItemTypes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default ChooseItemTypes