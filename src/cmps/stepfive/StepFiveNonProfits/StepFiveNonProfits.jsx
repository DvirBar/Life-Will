import React, { useContext } from 'react'
import FormWrapper from '../../utils/FormWrapper'
import YesNoRadio from "../../formikcomponents/YesNoRadio"
import NonProfitsContent from './NonProfitsContent'
import StepFiveNonProfitSchema from './validation'
import { SiteContext } from '../../../store/context'

function StepFiveNonProfit() {
    const {
        translation
    } = useContext(SiteContext)

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