import React from 'react'
import YesNoRadio from '../formikcomponents/YesNoRadio'
import translation, { answers } from '../../store/translation'
import FormikTextField from '../formikcomponents/FormikTextField'
import { useFormikContext } from 'formik'
import styled from '@emotion/styled'
import { rgba } from '../../Theme'
import { Typography } from '@mui/material'

function StepSixContent() {
    const { values } = useFormikContext()
    const funeralInChargeDetailsName = 'funeral_in_charge_details'
    console.log(values);
    return (
        <StyledStepSixContent>
            <YesNoRadio
                name="not_applied_before_spouse"
                question={translation.not_applied_before_spouse}
            />

            <FormikTextField
                name="burial_location"
                label={translation.burial_location}
                fullWidth />

            <YesNoRadio
                name="funeral_in_charge"
                question={translation.funeral_in_charge}
            />

            {values.funeral_in_charge === answers.yes &&
                <StyledInCharge>
                    <Typography variant="h2">פרטי האחראי</Typography>
                    <StyledInChargeDetailsFields>
                        <FormikTextField
                            name={`${funeralInChargeDetailsName}.first_name`}
                            label={translation.first_name}
                        />

                        <FormikTextField
                            name={`${funeralInChargeDetailsName}.last_name`}
                            label={translation.last_name}
                        />

                        <FormikTextField
                            name={`${funeralInChargeDetailsName}.person_id`}
                            label={translation.person_id}
                            numeric
                            maxLength={9}
                        />
                    </StyledInChargeDetailsFields>

                </StyledInCharge>
            }

            <YesNoRadio
                name="edi_card"
                question={translation.edi_card}
            />

            <YesNoRadio
                name="organ_donation"
                question={translation.organ_donation}
            />

            <YesNoRadio
                name="relatives_message"
                question={translation.relatives_message}
            />

            {values.relatives_message === answers.yes &&
                <FormikTextField
                    name="relatives_message_content"
                    label={translation.relatives_message_content}
                    multiline
                    rows={10}
                />
            }
        </StyledStepSixContent>
    )
}

const StyledStepSixContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const StyledInChargeDetailsFields = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
`

const StyledInCharge = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 1rem;
    border: 2px solid #ccc;
    /* border-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.15)}; */
    border-radius: 10px;
`

export default StepSixContent