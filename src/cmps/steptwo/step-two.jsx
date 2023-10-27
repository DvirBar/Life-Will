import React, { useContext } from 'react';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SiteContext } from '../../store/context';
import { PartnerDetails } from '../formikcomponents/partner-details';

const validatePartnerDetails = ((errors, status, ...partnerData) => {
	const [
		firstName,
		lastName,
		id
	] = partnerData;

	if (!(firstName && lastName && id))
		errors.partnerError = "יש למלא את פרטים הנדרשים";
	else
		errors = {};
})

const stepTwoValidationSchema = Yup.object({
	status: Yup.string().required("יש לבחור את הסטטוס")
})

export default function StepTwo() {
	const {
		data,
		setData,
		moveNextStep
	} = useContext(SiteContext);

	const handleSubmit = (values, actions, meta) => {
		setData({ ...values });
		moveNextStep();
	}

	const validate = (values, props) => {
		debugger;
		const errors = {};
		validatePartnerDetails(
			errors,
			values.status,
			values.partner_first_name,
			values.partner_last_name,
			values.partner_id)
		return errors;
	}

	return (
		<>
			<Formik
				validationSchema={stepTwoValidationSchema}
				initialValues={data}
				onSubmit={handleSubmit}
				validate={validate}
			>
				{({ values }) => {
					return (
						<Form className="input-container" style={{ width: "500px" }}>
							<div>סטטוס</div>
							<div role="group" className="status-group flex space-between input-btn">
								<label className={`${values.status === "נשוי" ? 'active' : ''}`}>
									<Field type="radio" name="status" value="נשוי" />
									נשוי
								</label>
								<label className={`${values.status === "פרוד" ? 'active' : ''}`}>
									<Field type="radio" name="status" value="פרוד" />
									פרוד
								</label>
								<label className={`${values.status === "אלמן" ? 'active' : ''}`}>
									<Field type="radio" name="status" value="אלמן" />
									אלמן
								</label>
								<label className={`${values.status === "רווק" ? 'active' : ''}`}>
									<Field type="radio" name="status" value="רווק" />
									רווק
								</label>
								<label className={`${values.status === "ערירי" ? 'active' : ''}`}>
									<Field type="radio" name="status" value="ערירי" />
									ערירי
								</label>
								<label className={`${values.status === "שותפות" ? 'active' : ''}`}>
									<Field type="radio" name="status" value="שותפות" />
									שותפות
								</label>
								<label className={`${values.status === "גרוש" ? 'active' : ''}`}>
									<Field type="radio" name="status" value="גרוש" />
									גרוש
								</label>
							</div>
							<ErrorMessage name="status" />

							{values.status === 'נשוי' && <div>
								<div className='partner-details'>
									<h3>אני נשוי ל-</h3>
									<div role="group" className="status-group flex space-between input-btn">
										<label className={`${values.partner_gender === "גבר" ? 'active' : ''}`}>
											<Field type="radio" name="partner_gender" value="גבר" />
											גבר
										</label>
										<label className={`${values.partner_gender === "אישה" ? 'active' : ''}`}>
											<Field type="radio" name="partner_gender" value="אישה" />
											אישה
										</label>
									</div>
								</div>
								<PartnerDetails className="partner-details" />
							</div>}
							{values.status === 'שותפות' && <div>
								<div className='partner-details'>
									<h3>אני מנהל זוגיות עם- </h3>
									<div role="group" className="status-group flex space-between input-btn">
										<label className={`${values.partner_gender === "גבר" ? 'active' : ''}`}>
											<Field type="radio" name="partner_gender" value="גבר" />
											גבר
										</label>
										<label className={`${values.partner_gender === "אישה" ? 'active' : ''}`}>
											<Field type="radio" name="partner_gender" value="אישה" />
											אישה
										</label>
									</div>
								</div>
								<PartnerDetails className="partner-details" />
							</div>}
							{values.status === 'גרוש' && <div>
								<div role="group" className="status-group flex space-between input-btn">
									<h5>האם תרצה להקצות  לגרוש/גרושתך מהצוואה?</h5>
									<label className={`${values.ex_partner_gain === "לא" ? 'active' : ''}`} style={{ width: '40px' }}>
										<Field type="radio" name="ex_partner_gain" value="לא" />
										לא
									</label>
									<label className={`${values.ex_partner_gain === "כן" ? 'active' : ''}`} style={{ width: '40px' }}>
										<Field type="radio" name="ex_partner_gain" value="כן" />
										כן
									</label>
								</div>
								{values.ex_partner_gain === 'כן' && <>
									<div className='partner-details'>
										<h3>פרטי זיהוי–</h3>
										<div role="group" className="status-group flex space-between input-btn">
											<label className={`${values.partner_gender === "גבר" ? 'active' : ''}`}>
												<Field type="radio" name="partner_gender" value="גבר" />
												גבר
											</label>
											<label className={`${values.partner_gender === "אישה" ? 'active' : ''}`}>
												<Field type="radio" name="partner_gender" value="אישה" />
												אישה
											</label>
										</div>
									</div>
									<PartnerDetails className="partner-details" />
								</>}
							</div>}
							{/* <StepTwoContinue next={next} prev={prev} data={data} />
            				<StepTwoContinue2 next={next} prev={prev} data={data} /> */}

							<button type="submit">המשך</button>
						</Form>
					)
				}
				}
			</Formik>
		</>
	)
}
