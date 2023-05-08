import { useState } from "react";
import StepOne from "./step-one";
import StepOneContinue from "./step-one-continue";
import StepTwo from "./step-two";
import StepTwoContinue from "./step-two-continue";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./pdf";
import StepTwoContinue2 from "./step-two-continue2";
import StepThree from "./step-three";

export default function MultiStepForm({ onSetStage, whatStage }) {
    const [data, setData] = useState({
        first_name: 'asd',
        last_name: 'asd',
        edited_by: 'כן',
        email: 'yarindayan11@gmail.com',
        birthDate: '03/23/2000',
        // birthDate: Date.now(),
        gender: 'other',
        person_id: '',
        citizenship: 'לא',
        passport_id: '',
        phone: '0534270777',
        address: '',
        status: 'רווק',
        partner_gender: '',
        partner_first_name: '',
        partner_last_name: '',
        partner_id: '',
        ex_partner_gain: 'לא',
        kids: 'לא',
        num_of_kids: 0,
        kid_id1: '',
        give_to_family: 'לא',
        give_to_family_type: '',
        real_estate: 'לא',
        real_estate_type: '',
        real_estate_type_percent: 0,
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
        if (newData.edited_by !== "כן" || !isAgeOver18) return
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
        <StepTwoContinue next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepTwoContinue2 next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
    ]
    console.log("data", data);

    return (
        <div className='form'>
            {steps[currentStep]}
            {/* {whatStage === 2 && steps[currentStep]} */}
            {/* <PDFViewer>
                <MyDocument />
            </PDFViewer> */}
        </div>
    )
}