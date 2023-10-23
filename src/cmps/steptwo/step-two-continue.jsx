import React, { useContext, useState } from 'react';

import { Formik, Form, Field, FieldArray } from "formik";
import { SiteContext } from '../../store/context';


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


	const renderKidsForm = (values) => {
		return (
			<FieldArray
				name="kids_data"
				render={arrayHelpers => (
					<div>
						{
							(
								values.kids_data.map((kid, i) => (
									<div key={i} className="flex gap direction-rtl">
										<div
											className='flex align-center pointer'
											style={{ visibility: (i === values.kids_data.length - 1 && i > 0) ? "visible" : "hidden" }}
											onClick={() => arrayHelpers.remove(i)}> -
										</div>
										<Field key={`kids_data[${i}].id`} name={`kids_data[${i}].id`} type="number" placeholder={`תז של ילד מספר ${i + 1}`} />
										<Field key={`kids_data.${i}.first_name`} name={`kids_data.${i}.first_name`} placeholder={`שם פרטי ${i + 1}`} />
										<Field key={`kids_data.${i}.last_name`} name={`kids_data.${i}.last_name`} placeholder={`שם משפחה ${i + 1}`} />
										<div
											className='flex align-center pointer'
											onClick={() => { arrayHelpers.push({ id: '', first_name: '', last_name: '' }) }}>+</div>
									</div>
								))
							)
						}
					</div >
				)
				}

			/>
		);
		// <div key={`${i}`} className="flex gap direction-rtl">
		// 	<div className='flex align-center pointer' style={{ visibility: (i === data.kids_data.length - 1 && i > 0) ? "visible" : "hidden" }} onClick={() => onRemoveKid(i)}>-</div>
		// 	<Field key={`id${i}`} onChange={(ev) => updateKidsData(ev, i)} name={`id${i}`} type="number" placeholder={`תז של ילד מספר ${i + 1}`} />
		// 	<Field key={`first_name${i}`} onChange={(ev) => updateKidsData(ev, i, 'first-name')} name={`first_name${i}`} placeholder={`שם פרטי ${i + 1}`} />
		// 	<Field key={`last_name${i}`} onChange={(ev) => updateKidsData(ev, i, 'last-name')} name={`last_name${i}`} placeholder={`שם משפחה ${i + 1}`} />
		// 	<div className='flex align-center pointer' onClick={onAddKid}>+</div>
		// </div>


	}

	// const handleSubmit = (values) => {
	//     next(values, false)
	// }


	return (
		<>
			<Formik
				//validationSchema={validationSchema}
				initialValues={data}
				onSubmit={handleSubmit}
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
