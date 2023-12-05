import { Typography } from '@mui/material';
import styled from '@emotion/styled'
import { ErrorMessage } from "formik";
import * as Yup from 'yup';

import FormikRadioGroup from '../formikcomponents/FormikRadioGroup';
import FormikTextField from '../formikcomponents/FormikTextField';
import FormikDatePicker from '../formikcomponents/FormikDatePicker';

import FormWrapper from "../utils/FormWrapper"

import translation from '../../store/translation';
import ChooseGender from '../utils/ChooseGender';

import HebrewDatePicker from '../formikcomponents/HebrewDatePicker';

export const validationSchema = Yup.object().shape({
	first_name: Yup.string().required('יש להזין שם פרטי').label("שם פרטי"),
	last_name: Yup.string().required('יש להזין שם משפחה').label("שם משפחה"),
	birthDate: Yup.date().required('יש להזין תאריך לידה'),
	gender: Yup.string()
		.required('יש לבחור מגדר')
});

export default function StepOne() {
	//TODO : implementation changed - check whether needed to be implemented
	// const handleSubmit = (values) => {
	// 	const their_date = new Date(values.birthDate);
	// 	const today = new Date();
	// 	const date2 = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
	// 	const diff = new Date(date2.getTime() - their_date.getTime());
	// 	const isAgeOver18 = diff.getUTCFullYear() - 1970 < 18 ? false : true
	// 	next(values, false, false, isAgeOver18)
	// }

	return (
		<FormWrapper
			validationSchema={validationSchema}
		>
			<StyledPersonalDetails>
				<FormikTextField
					label={translation.first_name}
					name="first_name"
				/>
				<FormikTextField
					label={translation.last_name}
					name="last_name"
				/>
			</StyledPersonalDetails>

			<StyledPersonalBirthdate>
				<Typography variant="subtitle1">מה תאריך הלידה שלך?</Typography>
				{/* TODO: Placeholder is missing dd/mm/yyyy*/}
				<FormikDatePicker name="birthDate" label={translation.birthDate} />
				<HebrewDatePicker name="hebrewBirthDate" label="תאריך עברי (לא חובה)" />

			</StyledPersonalBirthdate>

			<ChooseGender name="gender" />
			<Typography variant='string' gutterBottom>האם ערכת את הצוואה לבד?</Typography>
			<FormikRadioGroup
				name={"edited_by"}
				options={[{ value: "לא", label: "לא" }, { value: "כן", label: "כן" }]} />
			<ErrorMessage name="edited_by" />


			{/* <button onClick={() => moveNextStep()}>המשך</button> */}
			{/* <button onClick={() => nextStepHandler(formikProps, false, submitForm)}>המשך</button> */}
		</FormWrapper>
	)
}

const StyledPersonalDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
`

const StyledPersonalBirthdate = styled.div`
	padding:1rem 0;
	display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
	align-items: flex-start;
`

