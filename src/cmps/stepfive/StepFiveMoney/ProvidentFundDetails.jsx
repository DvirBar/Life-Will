import React from 'react'
import BaseLayout from '../../utils/BaseLayout'
import Question from '../../utils/Question'
import translation from '../../../store/translation'
import FormikTextField from '../../formikcomponents/FormikTextField'

function ProvidentFundDetails({ nameWithIndex }) {
    return (
        <BaseLayout>
            <Question title={translation.provident_funds_data.fund_name}>
                <FormikTextField
                    name={`${nameWithIndex}.fund_name`}
                    label={translation.provident_funds_data.fund_name}
                />
            </Question>

            <Question title={translation.provident_funds_data.fund_number}>
                <FormikTextField
                    name={`${nameWithIndex}.fund_number`}
                    label={translation.provident_funds_data.fund_number}
                    numeric
                />
            </Question>
        </BaseLayout>
    )
}

export default ProvidentFundDetails