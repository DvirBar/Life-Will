import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { SiteContext } from "../../store/context";
import * as Yup from 'yup';

import { HebrewMonthInput } from '../formikcomponents/hebrew-month-input';
import { HebrewDayInput } from '../formikcomponents/hebrew-day-input';

import translation from '../../store/translation';

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
				console.log(values);
				return (
					<Form>
						<div className="input-container">
							<div className="input-container-formik">
								<Field name="first_name" placeholder={`${translation.first_name}`} />
								<ErrorMessage name="first_name" />
								<Field name="last_name" placeholder={`${translation.last_name}`} />
								<ErrorMessage name="last_name" />
							</div>
							<div className="input-container-formik">
								<p>מה התאריך לידה שלך</p>
								<Field
									name="birthDate"
									type="date"
									className="birthDate"
									placeholder="dd/mm/yyyy"
								/>
								<ErrorMessage name="birthDate" />
								<p>תאריך לידה עברי*</p>
								<div className="display-rows">
									<label>
										שנה
										<Field name="hebrewBirthDate.year" />
									</label>
									<label>
										חודש
										<HebrewMonthInput name="hebrewBirthDate.month" />
									</label>
									<label>
										יום
										<HebrewDayInput name="hebrewBirthDate.day" />
									</label>

								</div>


								<div role="group">
									<p>מגדר</p>
									<div className="status-group flex space-between input-btn">
										<label className={`${values.gender === "זכר" ? 'active' : ''}`}>
											<Field type="radio" name="gender" value="זכר" />
											זכר
										</label>
										<label className={`${values.gender === "נקבה" ? 'active' : ''}`}>
											<Field type="radio" name="gender" value="נקבה" />
											נקבה
										</label>
										<label className={`${values.gender === "אחר" ? 'active' : ''}`}>
											<Field type="radio" name="gender" value="אחר" />
											אחר
										</label>
									</div>
								</div>
								<ErrorMessage name="gender" />
								<div role="group">
									<p>{`${translation.edited_by}`}</p>
									<div className="status-group flex space-between input-btn">
										<label className={`${values.edited_by === "לא" ? 'active' : ''}`}>
											<Field type="radio" name="edited_by" value="לא" />
											לא
										</label>
										<label className={`${values.edited_by === "כן" ? 'active' : ''}`}>
											<Field type="radio" name="edited_by" value="כן" />
											כן
										</label>
									</div>
								</div>
								<ErrorMessage name="edited_by" />
							</div>
							{/* <button onClick={() => moveNextStep()}>המשך</button> */}
							{/* <button onClick={() => nextStepHandler(formikProps, false, submitForm)}>המשך</button> */}
							<button type="submit">המשך</button>
						</div>
					</Form>
				)
			}
			}
		</Formik>

	)
}
