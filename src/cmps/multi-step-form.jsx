import { useState } from "react";
import StepOne from "./step-one";
import StepOneContinue from "./step-one-continue";
import StepTwo from "./step-two";

export default function MultiStepForm({ onSetStage, whatStage }) {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        edited_by: false,
        email: '',
        birthDate: Date.now(),
        gender: 'other',
        person_id: '',
        passport_id: '',
        phone: '',
        address: '',
        status: '',
        partner_gender: '',
        partner_first_name: '',
        partner_last_name: '',
        partner_id: '',
        ex_partner_gain: 'לא',
    })

    const [currentStep, setCurrentStep] = useState(0)

    const makeRequest = (formData) => {
        console.log("Form Submitted", formData);
    }

    const handleNextStep = (newData, final = false, nextStage = false, isAgeOver18 = true) => {
        setData(prev => ({ ...prev, ...newData }))
        if (final) {
            makeRequest(newData)
            return
        }
        if (newData.edited_by !== "true" || !isAgeOver18) return
        if (nextStage) onSetStage(whatStage + 1)
        setCurrentStep(prev => prev + 1)
    }

    const handlePrevStep = (newData) => {
        setData(prev => ({ ...prev, ...newData }))
        setCurrentStep(prev => prev - 1)
    }

    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepOneContinue next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    ]
    console.log("data", data);

    return (
        <div className='form'>
            {whatStage === 1 && steps[currentStep]}
            {whatStage === 2 && steps[currentStep]}
        </div>
    )
}