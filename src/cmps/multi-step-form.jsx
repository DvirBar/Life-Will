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
        money: '',
        kids: false,
    })

    const [currentStep, setCurrentStep] = useState(0)

    const makeRequest = (formData) => {
        console.log("Form Submitted", formData);
    }

    const handleNextStep = (newData, final = false, nextStage = false) => {
        setData(prev => ({ ...prev, ...newData }))
        if (!newData.edited_by) return alert('cannot move!')
        if (nextStage) onSetStage(whatStage + 1)
        if (final) {
            makeRequest(newData)
            return
        }
        setCurrentStep(prev => prev + 1)
        console.log('currentStep', currentStep);
    }

    const handlePrevStep = (newData) => {
        setData(prev => ({ ...prev, ...newData }))
        setCurrentStep(prev => prev - 1)
    }

    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepOneContinue next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />
    ]
    console.log("data", data);

    return (
        <div className='form'>
            {whatStage === 1 && steps[currentStep]}
            {whatStage === 2 && steps[currentStep]}
        </div>
    )
}