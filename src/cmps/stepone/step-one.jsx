import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { SiteContext } from "../../store/context";
import * as Yup from 'yup';

import { HebrewMonthInput } from '../formikcomponents/hebrew-month-input';
import { HebrewDayInput } from '../formikcomponents/hebrew-day-input';
export const validationSchema = Yup.object().shape({
	first_name: Yup.string().required('Required').label("שם פרטי"),
	last_name: Yup.string().required('Required').label("שם משפחה"),
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
	const handleSubmit = (values, actions) => {
		setData(prev => ({ ...prev, values }))
		moveNextStep();
	}
	return (
		<Formik
			validationSchema={validationSchema}
			initialValues={data}
			onSubmit={handleSubmit}
		>
			{({ values }) => {
				console.log(values);
				return (
					<Form>
						<div className="input-container">
							<div className="input-container-formik">
								<Field name="first_name" placeholder='שם פרטי' />
								<ErrorMessage name="first_name" />
								<Field name="last_name" placeholder='שם משפחה' />
								<ErrorMessage name="last_name" />
							</div>
							<div className="input-container-formik">
								<p>מה התאריך לידה שלך</p>
								{/* <input placeholder='תאריך לידה' type="date" name="birthDate" required /> */}
								<Field
									name="birthDate"
									type="date"
									className="birthDate"
									placeholder="dd/mm/yyyy"
								/>
								<p>תאריך עברי(לא חובה*)</p>
								<div className="display-rows">
									<label>
										שנה
										<Field name="hebrew_year" />
									</label>
									<label>
										חודש
										<HebrewMonthInput name="hebrew_month" />
									</label>
									<label>
										יום
										<HebrewDayInput name="hebrew_day" />
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
									</div>
								</div>
								<div role="group">
									<p>האם ערכת את הצוואה לבד?</p>
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
