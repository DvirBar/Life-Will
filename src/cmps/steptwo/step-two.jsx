import React, { useContext } from 'react';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SiteContext } from '../../store/context';
import { PartnerDetails } from './PartnerDetails';

import FormikTextField from '../formikcomponents/FormikTextField';
import FormikRadioGroup from '../formikcomponents/FormikRadioGroup';

import Button from '@mui/material/Button';

import FormikButtonSelect from '../formikcomponents/FormikButtonSelect'
import ButtonSelectItem from '../formikcomponents/buttonSelect/ButtonSelectItem'
import { Typography } from '@mui/material';

import translation, { statusTypes } from '../../store/translation'

import styled from '@emotion/styled'
import YesNoRadio from '../formikcomponents/YesNoRadio';

const validatePartnerDetails = ((errors, status, allocateToDivorsed, ...partnerData) => {
	const [
		firstName,
		lastName,
		id
	] = partnerData;

	const toAllocateForDivorsed = allocateToDivorsed === "כן" ? true : false;
	const isPartnerDetailsRequired = ["שותפות", "נשוי"].includes(status) || (toAllocateForDivorsed && status === "גרוש");

	if (isPartnerDetailsRequired && !(firstName && lastName && id)) {
		errors.partnerError = "יש למלא את פרטים הנדרשים";
	}
	else {
		errors = {};
	}
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

	const handleValidate = (values) => {
		const errors = {};
		validatePartnerDetails(
			errors,
			values.status,
			values.ex_partner_gain,
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
				validate={handleValidate}
			>
				{({ values, errors, touched }) => {
					return (
						<Form >
							<Typography variant="subtitle1">{translation.status}</Typography>
							<FormikRadioGroup
								name={"status"}
								options={Object.keys(statusTypes).map(key => {
									return { value: statusTypes[key], label: statusTypes[key] }
								})} />
							<ErrorMessage name="status" />

							{values.status === 'נשוי' && <div>
								<Typography variant="subtitle1">אני נשוי ל-</Typography>
								<PartnerDetails className="partner-details" />
							</div>}
							{values.status === 'שותפות' && <div>
								<Typography variant="subtitle1">אני מנהל זוגיות עם- </Typography>
								<PartnerDetails className="partner-details" />
							</div>}
							{values.status === 'גרוש' && <div>
								<YesNoRadio name="ex_partner_gain" question="האם תרצה להקצות  לגרוש/גרושתך מהצוואה?" />
								{values.ex_partner_gain === 'כן' && <>
									<Typography variant="subtitle1">פרטי זיהוי–</Typography>
									<PartnerDetails className="partner-details" />
								</>}
							</div>}
							{/* <StepTwoContinue next={next} prev={prev} data={data} />
            				<StepTwoContinue2 next={next} prev={prev} data={data} /> */}
							{touched.status && errors.partnerError && <div>{errors.partnerError}</div>}
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
	align-items:center
`