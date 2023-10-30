import React, { useContext, useState } from 'react';

import { Formik, Form, Field, FieldArray } from "formik";
import { SiteContext } from '../../store/context';
import { ChildDetails } from '../formikcomponents/child-details';

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

	const addKid = (arrayHelpers) => {
		const personInfo = {
			first_name: '',
			last_name: '',
			person_id: '',
		}
		const hebrewBirthDate = {
			day: '',
			month: '',
			year: ''
		}
		const initialModel = {
			...personInfo,
			gender: '',
			birthDate: '',
			hebrewBirthDate,
			has_disability: '',
			guardian_data: null
		}

		arrayHelpers.push({ initialModel });
	}

	const renderKidsForm = (values) => {
		return (
			<FieldArray
				name="kids_data"
				render={arrayHelpers => {
					return (
						<div>
							{

								(
									values.kids_data.map((kid, i) => (
										<ChildDetails {...{ values, arrayHelpers, i }} />
									))
								)
							}
						</div >
					)
				}
				}
			/>
		);
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
						<Form className="input-container" style={{ width: "500px" }}>
							<div role="group">
								<p>ילדים-</p>
								<div className="status-group input-btn">
									<label className={`${values.kids === "לא" ? 'active' : ''}`}>
										<Field type="radio" name="kids" value="לא" />
										לא
									</label>
									<label className={`${values.kids === "כן" ? 'active' : ''}`}>
										<Field type="radio" name="kids" value="כן" />
										כן
									</label>
								</div>
							</div>
							{values.kids === 'כן' &&
								<>
									{/* <div className="input-container-formik" >
										<p>מספר-</p>
										<Field name="num_of_kids" type="number" placeholder='מספר' />
									</div> */}
									<div>
										<div className="input-container-formik child-container direction-ltr" >
											{renderKidsForm(values)}
										</div>

									</div>
								</>

							}
							<button type="submit">המשך</button>
						</Form>
					)
				}
				}
			</Formik>

		</>
	)
}
