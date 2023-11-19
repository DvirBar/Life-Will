import React from 'react'
import BaseLayout from '../../utils/BaseLayout'
import Question from '../../utils/Question'
import translation from '../../../store/translation'
import FormikTextField from '../../formikcomponents/FormikTextField'

function StudyFundDetails({ nameWithIndex }) {
    return (
        <BaseLayout>
            <Question title={translation.study_funds_data.fund_name}>
                <FormikTextField
                    name={`${nameWithIndex}.fund_name`}
                    label={translation.study_funds_data.fund_name}
                />
            </Question>

            <Question title={translation.study_funds_data.fund_number}>
                <FormikTextField
                    name={`${nameWithIndex}.fund_number`}
                    label={translation.study_funds_data.fund_number}
                    numeric
                />
            </Question>
        </BaseLayout>
    )
}

export default StudyFundDetails