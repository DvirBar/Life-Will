import React from 'react'
import FormWrapper from "../utils/FormWrapper"
import StepSixContent from './StepSixContent'
import StepSixSchema from './validation'

function StepSix() {
    return (
        <FormWrapper
            validationSchema={StepSixSchema}>
            <StepSixContent />
        </FormWrapper>
    )
}


export default StepSix