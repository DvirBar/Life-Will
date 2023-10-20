import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { SiteContext } from "../../store/context";

const stepOneContinueValidationSchema = Yup.object({
	email: Yup.string().required().email().label("Email"),
})

export default function StepOneContinue() {

	const {
		data,
		setData,
		moveNextStep
	} = useContext(SiteContext);

	const handleSubmit = (values, actions) => {
		setData(prev => ({ ...prev, values }))
		moveNextStep(true);
	}
	return (
		<>
			<Formik
				validationSchema={stepOneContinueValidationSchema}
				initialValues={data}
				onSubmit={handleSubmit}
			>
				{({ values }) => {
					return (
						<Form>
							<div className="input-container-formik">
								<Field name="person_id" type="number" placeholder='תז' />
								<div role="group">
									<p>האם יש בבעלותך אזרחות נוספת?</p>
									<div className="status-group flex space-between input-btn">
										<label className={`${values.citizenship === "לא" ? 'active' : ''}`}>
											<Field type="radio" name="citizenship" value="לא" />
											לא
										</label>
										<label className={`${values.citizenship === "כן" ? 'active' : ''}`}>
											<Field type="radio" name="citizenship" value="כן" />
											כן
										</label>
									</div>
								</div>
								{values.citizenship === "כן" && <Field name="passport_id" type="number" placeholder='מספר דרכון' />}
								<Field name="email" placeholder="מייל" />
								<ErrorMessage name="email" />
								<Field name="phone" type="number" placeholder='פלאפון' />
								<Field name="address" placeholder='רחוב ומספר בית' />
								{/* <Field name="company" placeholder='שם חברה / עסק' /> */}
								{/* <Field name="city" placeholder='עיר / יישוב' /> */}
								{/* <Field name="companyID" placeholder='ח.פ' /> */}
								{/* <Field name="" placeholder='' /> */}
							</div>
							{/* <button type="button" onClick={() => prev(values)}>Back</button> */}
							<button type="submit">המשך</button>
						</Form>
					)
				}
				}
			</Formik>
		</>
	)
}
