import React, { useContext } from 'react';
import { Formik, Form } from "formik";
import { Typography, Button } from '@mui/material';
import styled from '@emotion/styled'

import { SiteContext } from '../../store/context';

import YesNoRadio from '../formikcomponents/YesNoRadio';
import { InheritorsTypeSelect } from './InheritorsTypeSelect';

import { giveToFamilyTypes } from '../../store/translation';




export default function StepTwoContinue2() {

	const {
		data,
		setData,
		moveNextStep
	} = useContext(SiteContext);

	const handleSubmit = (values, actions) => {
		setData(({ ...values }))
		moveNextStep(true);
	}

	return (
		<>
			<Formik
				//validationSchema={validationSchema}
				initialValues={data}
				onSubmit={handleSubmit}
			>
				{({ values, setFieldValue }) => {
					const isGiveToFamily = values?.give_to_family === "כן";

					return (
						<Form>
							<StyledAdditionalInheritorsQuestion>
								<Typography variant="subtitle1">האם יש הורים / אחים / חברים או אחרים שתרצה להפריש להם מצוואתך?</Typography>
								<YesNoRadio
									name="give_to_family" />
							</StyledAdditionalInheritorsQuestion>

							{isGiveToFamily && <InheritorsTypeSelect name="give_to_family_type" keyValues={giveToFamilyTypes} setFieldItem={setFieldValue} formikValues={values} />}
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

const StyledAdditionalInheritorsQuestion = styled.div`
	display:flex;
	flex-direction:column;
	padding-bottom:2rem;
	gap:1rem;
`

const StyledColumnCenter = styled.div`
    padding:1rem 0;
	display: flex;
	flex-direction: column;
	align-items:center
`