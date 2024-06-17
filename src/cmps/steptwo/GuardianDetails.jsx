import styled from '@emotion/styled'
import React, { useContext } from 'react'
import { answers, guardianTypes } from '../../store/translation'
import { getAge } from '../utils/getAge'
import { MenuItem, Typography } from '@mui/material'
import FormikSelect from '../formikcomponents/FormikSelect'
import FormikTextField from '../formikcomponents/FormikTextField'
import { SiteContext } from '../../store/context'

export const MAX_AGE_FOR_GUARDIAN = 18
function GuardianDetails({ name, kidItem }) {
    const {
        translation
    } = useContext(SiteContext)

    if ((kidItem.has_disability !== answers.yes && getAge(kidItem.birthDate) >= MAX_AGE_FOR_GUARDIAN) || !kidItem.birthDate) {
        return <></>
    }
    return (
        <StyledGuardianDetails>
            <Typography variant="subtitle1">
                {translation.kids_data.guardian_text}
            </Typography>
            <StyledFieldsWrapper>
                <FormikSelect
                    name={`${name}.type`}
                    label={translation.kids_data.guardian_data.type}
                >
                    {Object.keys(guardianTypes).map(key =>
                        <MenuItem
                            key={key}
                            value={guardianTypes[key]}>
                            {guardianTypes[key]}
                        </MenuItem>
                    )}
                </FormikSelect>
                <FormikTextField
                    name={`${name}.first_name`}
                    label={translation.kids_data.guardian_data.first_name}
                />
                <FormikTextField
                    name={`${name}.last_name`}
                    label={translation.kids_data.guardian_data.last_name}
                />
                <FormikTextField
                    numeric
                    maxLength={9}
                    name={`${name}.person_id`}
                    label={translation.kids_data.guardian_data.person_id}
                />
            </StyledFieldsWrapper>
        </StyledGuardianDetails>
    )
}

const StyledGuardianDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 10px;
    border: 2px solid #ccc;
    padding: 1rem;
`

const StyledFieldsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
`

export default GuardianDetails