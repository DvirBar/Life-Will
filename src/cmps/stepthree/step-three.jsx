import React from 'react';
import RealEstateSchema from './validation/realEstateValidation';
import FormWrapper from '../utils/FormWrapper';
import StepThreeInheritedTopic from './StepThreeInheritedTopic';

export default function StepThree() {
	return (
		<FormWrapper
			validationSchema={RealEstateSchema}>
			<StepThreeInheritedTopic />
		</FormWrapper>

	)
}
