import React from 'react'
import FormWrapper from '../../utils/FormWrapper'
import YesNoRadio from "../../formikcomponents/YesNoRadio"
import translation from '../../../store/translation'
import NonProfitsContent from './NonProfitsContent'
import StepFiveNonProfitSchema from './validation'

function StepFiveNonProfit() {

    return (
        <FormWrapper
            validationSchema={StepFiveNonProfitSchema}
        >
            <YesNoRadio
                name="non_profit_provision"
                question={translation.non_profit_provision}
            />
            <NonProfitsContent />
        </FormWrapper>
    )
}

export default StepFiveNonProfit