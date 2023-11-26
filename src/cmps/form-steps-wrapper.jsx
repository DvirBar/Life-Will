import React, { useContext } from 'react';
import StepOne from './stepone/step-one';
import StepOneContinue from './stepone/step-one-continue';
import StepTwo from './steptwo/step-two';
import StepTwoContinue from './steptwo/step-two-continue';
import StepTwoContinue2 from './steptwo/step-two-continue2';
import StepThree from './stepthree/step-three';
import { SiteContext } from '../store/context'
import { inheritanceKeysStep4 } from '../store/translation';
import InheritedTopicForm from './utils/InheritedItem/InheritedTopicForm';
import FutureInheritedItem from './utils/InheritedItem/FutureInheritedItem';
import StepFiveMoney from './stepfive/StepFiveMoney/StepFiveMoney';
import StepSix from './stepsix/StepSix';
import StepFiveNonProfit from './stepfive/StepFiveNonProfits/StepFiveNonProfits';


function FormStepsWrapper() {
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
			<FutureInheritedItem name="future_real_estate" />
		],
		[
			...Object.keys(inheritanceKeysStep4).map((key) =>
				key === inheritanceKeysStep4.future_items
					? <FutureInheritedItem name={inheritanceKeysStep4.future_items} />
					: <InheritedTopicForm name={key} />
			)
		],
		[
			<StepFiveMoney />,
			<StepFiveNonProfit />
		],
		[
			<StepSix />
		]
	]

	return (
		<>
			{stages[selectedStage][selectedStep]}
		</>
	)
}

export default FormStepsWrapper