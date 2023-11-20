import { useContext } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled'
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

import { SiteContext } from "../../store/context";

import { HebrewMonthInput } from '../formikcomponents/hebrew-month-input';
import { HebrewDayInput } from '../formikcomponents/hebrew-day-input';

import FormikRadioGroup from '../formikcomponents/FormikRadioGroup';
import FormikTextField from '../formikcomponents/FormikTextField';
import FormikDatePicker from '../formikcomponents/FormikDatePicker';

import sampleData from '../../store/sampleData';
import translation from '../../store/translation';

export const validationSchema = Yup.object().shape({
	first_name: Yup.string().required('יש להזין שם פרטי').label("שם פרטי"),
	last_name: Yup.string().required('יש להזין שם משפחה').label("שם משפחה"),
	birthDate: Yup.date().required('יש להזין תאריך לידה'),
	gender: Yup
		.string()
		.oneOf(["זכר", "נקבה", "אחר"])
		.required('נדרש לבחור את המגדר').label("מגדר")
	//email: Yup.string().email('Invalid email').required('Required'),
});

export default function StepOne() {

	const {
		data,
		setData,
		moveNextStep
	} = useContext(SiteContext);
	//TODO : implementation changed - check whether needed to be implemented
	// const handleSubmit = (values) => {
	// 	const their_date = new Date(values.birthDate);
	// 	const today = new Date();
	// 	const date2 = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
	// 	const diff = new Date(date2.getTime() - their_date.getTime());
	// 	const isAgeOver18 = diff.getUTCFullYear() - 1970 < 18 ? false : true
	// 	next(values, false, false, isAgeOver18)
	// }
	const handleSubmit = (values) => {
		setData({ ...values })
		moveNextStep();
	}

	return (
		<Formik
			validationSchema={validationSchema}
			initialValues={sampleData}
			onSubmit={handleSubmit}
		>
			{({ values }) => {
				console.log(values);
				return (
					<Form>
						<StyledPersonalDetails>
							{/* TODO: Placeholder is missing => translation.first_name*/}
							<FormikTextField name={"first_name"} placeholder={translation.first_name} />
							<ErrorMessage name="first_name" />
							{/* TODO: Placeholder is missing => translation.last_name*/}
							<FormikTextField name={"last_name"} placeholder={translation.last_name} />
							<ErrorMessage name="last_name" />
						</StyledPersonalDetails>

						<StyledPersonalBirthdate>
							<Typography variant="subtitle1">מה התאריך לידה שלך</Typography>
							{/* TODO: Placeholder is missing dd/mm/yyyy*/}
							<FormikDatePicker name={"birthDate"} label={"תאריך לידה"} />
							<ErrorMessage name="birthDate" />
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}

								>
									<Typography>הוספת תאריך עברי?</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<StyledHebrewDateItems>
										<FormikTextField name={"hebrewBirthDate.year"} label={"שנה"} />
										<HebrewMonthInput name="hebrewBirthDate.month" label={"חודש"} />
										<HebrewDayInput name={"hebrewBirthDate.day"} label={"יום"} />
									</StyledHebrewDateItems>
								</AccordionDetails>
							</Accordion>
						</StyledPersonalBirthdate>
						<StyledColumnCenter>
							<FormikRadioGroup
								name={"gender"}
								options={[
									{
										value: "זכר",
										label: "זכר"
									},
									{
										value: "נקבה",
										label: "נקבה"
									},
									{
										value: "אחר",
										label: "אחר"
									}]} />
							<ErrorMessage name="gender" />
						</StyledColumnCenter>

						<StyledColumnCenter>
							<Typography variant='string' gutterBottom>האם ערכת את הצוואה לבד?</Typography>
							<FormikRadioGroup
								name={"edited_by"}
								options={[{ value: "לא", label: "לא" }, { value: "כן", label: "כן" }]} />
							<ErrorMessage name="edited_by" />
						</StyledColumnCenter>
						<StyledColumnCenter>
							<Button variant="contained" type="submit">המשך</Button>
						</StyledColumnCenter>

						{/* <button onClick={() => moveNextStep()}>המשך</button> */}
						{/* <button onClick={() => nextStepHandler(formikProps, false, submitForm)}>המשך</button> */}
					</Form>
				)
			}
			}
		</Formik>

	)
}

const StyledPersonalDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
	justify-content:center;
`

const StyledPersonalBirthdate = styled.div`
	padding:1rem 0;
	display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
	justify-content:center;
	&>*{
		max-width:200px
	}
	align-items:center
`

const StyledColumnCenter = styled.div`
    padding:1rem 0;
	display: flex;
	flex-direction: column;
	align-items:center
`
const StyledHebrewDateItems = styled.div`
	&>*{
		max-width: 120px;
		padding-bottom:1rem;
	}	
`
