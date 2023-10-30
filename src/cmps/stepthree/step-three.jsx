import React, { useContext, useState } from 'react';

import { Formik, Form, Field } from "formik";
import { SiteContext } from '../../store/context';
import translation, { answers } from '../../store/translation';
import { InputLabel, Select } from '@mui/material';
import YesNoRadio from '../formikcomponents/YesNoRadio';
import ItemsList from '../formikcomponents/ItemsList/ItemsList';


export default function StepThree() {
	const {
		data,
		setData,
		moveNextStep
	} = useContext(SiteContext);

	const handleSubmit = values => {
		setData(values)
		moveNextStep(true);
	}

	return (
		<>
			<Formik
				//validationSchema={validationSchema}
				initialValues={data}
				onSubmit={handleSubmit}
			>
				{({ values }) => {
					return (
						<Form className="input-container" style={{ minWidth: "500px" }}>
							<h4>{translation.real_estate}</h4>
							<YesNoRadio name={"real_estate"} />
							{/* {values.real_estate === 'כן' &&
							} */}
							<button onClick={() => moveNextStep(true)}>המשך</button>
						</Form>
					)
				}
				}
			</Formik>
		</>
	)
}
