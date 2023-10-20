import React, { useContext } from 'react';
import StepOne from './stepone/step-one';
import StepOneContinue from './stepone/step-one-continue';
import StepTwo from './steptwo/step-two';
import StepTwoContinue from './steptwo/step-two-continue';
import StepTwoContinue2 from './steptwo/step-two-continue2';
import StepThree from './stepthree/step-three';
import StepFourVehicle from './stepfour/step-four-vehicle';
import StepFourJewelry from './stepfour/step-four-jewelry';
import StepFourTool from './stepfour/step-four-tools';
import StepFourArt from './stepfour/step-four-art';
import { SiteContext } from '../store/context'


function FormStepsWrapper({ values, nextStepHandler, formRef }) {
	const {
		selectedStep,
		selectedStage
	} = useContext(SiteContext);


	const stages = [
		[
			// <StepOneWrapper
			// 	formikProps={values}
			// 	nextStepHandler={nextStepHandler}
			// 	validationSchema={stepOneSchema}
			// 	formRef={formRef} />,
			<StepOne />,
			<StepOneContinue />,
		],
		[
			<StepTwo />,
			<StepTwoContinue />,
			<StepTwoContinue2 />,
		],
		[
			<StepThree />,
		],
		[
			<StepFourVehicle />,
			<StepFourJewelry />,
			<StepFourTool />,
			<StepFourArt />,
		],
	]

	return (
		<>
			{stages[selectedStage][selectedStep]}
		</>
	)
}

export default FormStepsWrapper