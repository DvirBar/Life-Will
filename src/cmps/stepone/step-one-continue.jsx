import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { SiteContext } from "../../store/context";
import translation from '../../store/translation';

import FormikTextField from '../formikcomponents/FormikTextField';
import FormikRadioGroup from '../formikcomponents/FormikRadioGroup';
import { AddressItems } from './AddressItem';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import styled from '@emotion/styled'

const stepOneContinueValidationSchema = Yup.object({
	email: Yup.string().required("יש להזין את הדואר האלקטרוני").email().label("Email"),
	citizenship: Yup.string().oneOf(["כן", "לא"]).required("יש לבחור האם קיימת אזרחות"),
	person_id: Yup.number().required("יש להזין תעודת זהות"),
	phone: Yup.string().required("יש להזין את הטלפון"),
	address: Yup.string().min(5).required("יש להזין את הכתובת")
})

export default function StepOneContinue() {

	const {
		data,
		setData,
		moveNextStep
	} = useContext(SiteContext);

	const handleSubmit = (values, actions) => {
		setData({ ...values });
		moveNextStep(true);
	}
	return (
		<>
			<Formik
				validationSchema={stepOneContinueValidationSchema}
				initialValues={data}
				onSubmit={handleSubmit}
			>
				{({ values, setFieldValue }) => {
					console.log(values);
					return (
						<Form>
							<div>
								<StyledColumnCenter>
									<FormikTextField name="person_id" type="number" placeholder={translation.person_id} />
									<ErrorMessage name="person_id" />
								</StyledColumnCenter>
								<StyledColumnCenter>
									<Typography variant='subtitle1' gutterBottom>{translation.citizenship}</Typography>
									<FormikRadioGroup
										name={"citizenship"}
										options={[{ value: "לא", label: "לא" }, { value: "כן", label: "כן" }]}
									/>
									{/* <div className="status-group flex space-between input-btn">
										<label className={`${values.citizenship === "לא" ? 'active' : ''}`}>
											<Field type="radio" name="citizenship" value="לא" />
											לא
										</label>
										<label className={`${values.citizenship === "כן" ? 'active' : ''}`}>
											<Field type="radio" name="citizenship" value="כן" />
											כן
										</label>
									</div> */}
									{values.citizenship === "כן" && <FormikTextField name="passport_id" type="number" placeholder={translation.passport_id} />}
									<FormikTextField name="email" placeholder={translation.email} />
									<ErrorMessage name="email" />
									<FormikTextField name="phone" type="text" placeholder={translation.phone} />
									<ErrorMessage name="phone" />
								</StyledColumnCenter>
								<StyledRowCenter>
									<AddressItems name="address" setFieldValue={setFieldValue} />
									<ErrorMessage name="address" />
								</StyledRowCenter>

								{/* <Field name="company" placeholder='שם חברה / עסק' /> */}
								{/* <Field name="city" placeholder='עיר / יישוב' /> */}
								{/* <Field name="companyID" placeholder='ח.פ' /> */}
								{/* <Field name="" placeholder='' /> */}
							</div>
							{/* <button type="button" onClick={() => prev(values)}>Back</button> */}
							<StyledColumnCenter>
								<Button variant="contained" type="submit">המשך</Button>
							</StyledColumnCenter>

						</Form>
					)
				}
				}
			</Formik>
		</>
	)
}

const StyledColumnCenter = styled.div`
    padding:1rem 0;
	display: flex;
	flex-direction: column;
	align-items:center;
	gap:1rem;
`
const StyledRowCenter = styled.div`
    padding:1rem 0;
	display: flex;
	flex-direction: row;
	align-items:center;
	gap:1rem;
`