import { useEffect, useState } from "react";
import StepOne from "./step-one";
import StepOneContinue from "./step-one-continue";
import StepTwo from "./step-two";
import StepTwoContinue from "./step-two-continue";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./pdf";
import StepTwoContinue2 from "./step-two-continue2";
import StepThree from "./step-three";
import { useDispatch } from "react-redux";
import { addUser } from "../store/user.actions";
import StepFour from "./step-four";

export default function MultiStepForm({ onSetStage, whatStage, selectedStage }) {
    const dispatch = useDispatch()

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
        kids_data: [{
            kid_id: '',
            kid_first_name: '',
            kid_last_name: '',
        }],
        real_estate_data: [{
            type: '',
            country: '',
            city: '',
            street: '',
            house_number: '',
            block: '',
            lot: '',
            size: '',
            ground_description: '',
            type_percent: 0,
            share_percent: 0,
            general_description: ''

        }],
        give_to_family: 'לא',
        give_to_family_type: '',
        real_estate: 'לא',
        real_estate_type: '',
        real_estate_type_percent: 0,
        real_estate_share_percent: 0,
    })

    const [currentStep, setCurrentStep] = useState(0)
    useEffect(() => {
        setCurrentStep(selectedStage)
    }, [selectedStage]);
    const makeRequest = (formData) => {
        dispatch(addUser({
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            birthDate: formData.birthDate,
        }))
        console.log("Form Submitted", formData);
    }

    const handleNextStep = (newData, final = false, nextStage = false, isAgeOver18 = true, skipNextStage = false) => {
        setData(prev => ({ ...prev, ...newData }))
        if (final) {
            makeRequest(newData)
            return
        }
        if (newData.edited_by !== "כן" || !isAgeOver18) return
        if (nextStage) onSetStage(whatStage + 1)
        if (skipNextStage) return setCurrentStep(prev => prev + 2)
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
        <StepFour next={handleNextStep} prev={handlePrevStep} data={data} />,
    ]

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