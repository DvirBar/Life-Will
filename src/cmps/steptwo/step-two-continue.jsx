import React, { useContext, useState } from 'react';
import { Formik, Form } from "formik";
import { Typography } from '@mui/material';
import styled from '@emotion/styled'

import { SiteContext, defaultChildData } from '../../store/context';

import YesNoRadio from '../formikcomponents/YesNoRadio';
import ItemsList from "../utils/ItemsList/ItemsList";
import { ChildDetails } from './ChildDetails';

import Button from '@mui/material/Button';


import translation from '../../store/translation'

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
					console.log(values);
					return (
						<Form>
							<StyledChildQuestion>
								<Typography>ילדים-</Typography>
								<YesNoRadio name="kids" />
							</StyledChildQuestion>
							{
								values.kids === 'כן' &&
								<ItemsList
									name="kids_data"
									values={values}
									title={translation.kids}
									defaultValue={defaultChildData}
									renderItem={(dataItem, itemName) => <ChildDetails dataItem={dataItem} itemName={itemName} />} />
							}
							<StyledColumnCenter>
								<Button variant="contained" type="submit">המשך</Button>
							</StyledColumnCenter>
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
	padding-bottom:2rem;
	
`
const StyledColumnCenter = styled.div`
    padding:1rem 0;
	display: flex;
	flex-direction: column;
	align-items:center
`