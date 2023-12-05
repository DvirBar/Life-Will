import styled from '@emotion/styled'
import * as Yup from "yup";

import FormikTextField from '../formikcomponents/FormikTextField';

import translation, { answers } from '../../store/translation';
import FormWrapper from "../utils/FormWrapper";

import YesNoRadio from "../formikcomponents/YesNoRadio"
import CitizenshipField from "./CitizenshipField";
import AddressDetails from "./AddressDetails"

const stepOneContinueValidationSchema = Yup.object({
	person_id: Yup.number().required("יש להזין תעודת זהות"),
	citizenship: Yup.string().required("יש לבחור האם קיימת אזרחות"),
	// TODO: make sure passport_id works!
	passport_id: Yup.string().when("citizenhship", {
		is: answers.yes,
		then: (schema) => schema.required("יש להזין מספר דרכון זר")
	}),
	address: Yup.object().shape({
		city: Yup.string().required("יש להזין עיר"),
		street: Yup.string().required("יש להזין רחוב"),
		houseNum: Yup.string().required("יש להזין מספר בית"),
	}),
	email: Yup.string().required("יש להזין דואר אלקטרוני").email(),
	phone: Yup.string().required("יש להזין מספר טלפון"),
})

export default function StepOneContinue() {
	return (
		<FormWrapper
			validationSchema={stepOneContinueValidationSchema}
		>
			<StyledContent>
				<FormikTextField
					name="person_id"
					numeric
					maxLength={9}
					label={translation.person_id}
				/>
				<YesNoRadio
					name="citizenship"
					question={translation.citizenship}
				/>
				<CitizenshipField />
				<AddressDetails />
				<FormikTextField
					name="email"
					label={translation.email}
				/>
				<FormikTextField
					name="phone"
					numeric
					label={translation.phone}
				/>
			</StyledContent>
		</FormWrapper>
	)
}

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: flex-start;
`

