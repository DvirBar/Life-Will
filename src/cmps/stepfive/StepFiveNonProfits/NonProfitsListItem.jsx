import styled from '@emotion/styled'
import React from 'react'
import FormikTextField from '../../formikcomponents/FormikTextField'
import translation, { answers } from '../../../store/translation'
import YesNoRadio from '../../formikcomponents/YesNoRadio'

function NonProfitsListItem({ nameWithIndex, nonProfitItem }) {

    return (
        <StyledNonProfitsListItem>
            <FormikTextField
                name={`${nameWithIndex}.non_profit_name`}
                label={translation.non_profit_provision_data.non_profit_name}
                fullWidth
                disabled
            />
            <FormikTextField
                name={`${nameWithIndex}.non_profit_provision_percentage`}
                label={translation.non_profit_provision_data.non_profit_provision_percentage}
                percent
            />
            <YesNoRadio
                name={`${nameWithIndex}.non_profit_message`}
                question={translation.non_profit_provision_data.non_profit_message}
            />
            {nonProfitItem?.non_profit_message === answers.yes &&
                <FormikTextField
                    name={`${nameWithIndex}.non_profit_message_content`}
                    label={translation.non_profit_provision_data.non_profit_message_content}
                    multiline
                    rows={5}
                    fullWidth
                />
            }
        </StyledNonProfitsListItem>
    )
}

const StyledNonProfitsListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: flex-start;
`

export default NonProfitsListItem