import React, { useContext, useState } from 'react';

import { Formik, Form, Field, FieldArray } from "formik";
import { SiteContext, defaultChildData } from '../../store/context';

import YesNoRadio from '../formikcomponents/YesNoRadio';
import ItemsList from "../utils/ItemsList/ItemsList";
import { ChildDetails } from './ChildDetails';

import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import translation, { statusTypes } from '../../store/translation'

import styled from '@emotion/styled'


export default function StepTwoContinue() {

	const {
		data,
		setData,
		moveNextStep
	} = useContext(SiteContext);

	const handleSubmit = (values, actions) => {
		setData({ ...values })
		moveNextStep();
	}

	const handleValidate = () => {
		const errors = {};
		return errors;
	}

	return (
		<>
			<Formik
				//validationSchema={validationSchema}
				initialValues={data}
				onSubmit={handleSubmit}
				validate={handleValidate}
			>
				{({ values, resetForm }) => {
					return (
						<Form>
							<StyledChildQuestion>
								<Typography>ילדים-</Typography>
								<YesNoRadio name="kids" />
							</StyledChildQuestion>
							{
								values.kids === 'כן' &&
								<>
									{/* <div className="input-container-formik" >
										<p>מספר-</p>
										<Field name="num_of_kids" type="number" placeholder='מספר' />
									</div> */}
									<ItemsList
										name="kids_data"
										values={values}
										title={translation.kids}
										defaultValue={defaultChildData}
										renderItem={(dataItem, itemName) => <ChildDetails dataItem={dataItem} itemName={itemName} />} />

								</>

							}
							<Button variant="contained" type="submit">המשך</Button>
						</Form>
					)
				}
				}
			</Formik >

		</>
	)
}

const StyledChildQuestion = styled.div`
	display:flex;
	flex-direction:row;
	
`
