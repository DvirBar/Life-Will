import React, { useContext } from 'react'
import StepOne from './step-one'
import StepOneContinue from './step-one-continue'
import StepTwo from './step-two'
import StepTwoContinue from './step-two-continue'
import StepTwoContinue2 from './step-two-continue2'
import StepThree from './step-three'
import StepFourVehicle from './step-four-vehicle'
import StepFourJewelry from './step-four-jewelry'
import StepFourTool from './step-four-tools'
import StepFourArt from './step-four-art'
import { SiteContext } from '../store/context'

function FormStepsWrapper({ values }) {
	const {
		selectedStep,
		selectedStage
	} = useContext(SiteContext)

	const stages = [
		[
			<StepOne formikProps={values} />,
			<StepOneContinue formikProps={values} />,
		],
		[
			<StepTwo formikProps={values} />,
			<StepTwoContinue formikProps={values} />,
			<StepTwoContinue2 formikProps={values} />,
		],
		[
			<StepThree formikProps={values} />,
		],
		[
			<StepFourVehicle formikProps={values} />,
			<StepFourJewelry formikProps={values} />,
			<StepFourTool formikProps={values} />,
			<StepFourArt formikProps={values} />,
		],
	]

	return (
		<>
			{stages[selectedStage][selectedStep]}
		</>
	)
}

export default FormStepsWrapper