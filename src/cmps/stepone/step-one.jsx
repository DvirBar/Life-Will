import { Formik, Form, ErrorMessage } from "formik";
import { useContext } from "react";
import { SiteContext } from "../../store/context";
import * as Yup from 'yup';

import { HebrewMonthInput } from '../formikcomponents/hebrew-month-input';
import { HebrewDayInput } from '../formikcomponents/hebrew-day-input';

import translation from '../../store/translation';

import FormikRadioGroup from '../formikcomponents/FormikRadioGroup';
import FormikTextField from '../formikcomponents/FormikTextField';
import FormikDatePicker from '../formikcomponents/FormikDatePicker';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import sampleData from '../../store/sampleData';

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
				return (
					<Form>
						<div>
							<div>
								{/* TODO: Placeholder is missing => translation.first_name*/}
								<FormikTextField name={"first_name"} placeholder={translation.first_name} />
								<ErrorMessage name="first_name" />
								{/* TODO: Placeholder is missing => translation.last_name*/}
								<FormikTextField name={"last_name"} placeholder={translation.last_name} />
								<ErrorMessage name="last_name" />
							</div>
							<div>
								<p>מה התאריך לידה שלך</p>
								{/* TODO: Placeholder is missing dd/mm/yyyy*/}
								<FormikDatePicker name={"birthDate"} label={"תאריך לידה"} />
								<ErrorMessage name="birthDate" />
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Typography>תאריך לידה עברי*</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<FormikTextField name={"hebrewBirthDate.year"} label={"שנה"} />
										<HebrewMonthInput name="hebrewBirthDate.month" label={"חודש"} />
										<HebrewDayInput name={"hebrewBirthDate.day"} label={"יום"} />
									</AccordionDetails>
								</Accordion>
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
								<Typography variant='string' gutterBottom>האם ערכת את הצוואה לבד?</Typography>
								<FormikRadioGroup
									name={"edited_by"}
									options={[{ value: "לא", label: "לא" }, { value: "כן", label: "כן" }]} />
								<ErrorMessage name="edited_by" />
							</div>
							{/* <button onClick={() => moveNextStep()}>המשך</button> */}
							{/* <button onClick={() => nextStepHandler(formikProps, false, submitForm)}>המשך</button> */}
							<Button variant="contained" type="submit">המשך</Button>
						</div>
					</Form>
				)
			}
			}
		</Formik>

	)
}
