import React, { useContext, useState } from 'react';

import { Formik, Form, Field, FieldArray } from "formik";
import { SiteContext, defaultRealEstateData } from '../../store/context';
import translation, { answers } from '../../store/translation';
import { Button, InputLabel, Select } from '@mui/material';
import YesNoRadio from '../formikcomponents/YesNoRadio';
import ItemsList from '../formikcomponents/ItemsList/ItemsList';
import RealEstateItem from './RealEstateItem';


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
							<YesNoRadio name="real_estate" />
							{values.real_estate === 'כן' &&
								<ItemsList
									name="real_estate_data"
									values={values}
									title={translation.real_estate_title}
									defaultValue={defaultRealEstateData}
									renderItem={index => <RealEstateItem index={index} />} />
							}
							<Button variant="contained" onClick={() => moveNextStep(true)}>המשך</Button>
						</Form>
					)
				}
				}
			</Formik>
		</>
	)
}
