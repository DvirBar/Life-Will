import React, { useContext, useState } from 'react';

import { Formik, Form, Field } from "formik";
import StepThreeAssociations from '../stepthree/step-three-associations';
import StepThreekids from '../stepthree/step-three-kids';
import { SiteContext } from '../../store/context';


export default function StepFourArt() {
	const [artCount, setArtCount] = useState(0)

	const {
		data,
		setData,
		moveNextStep
	} = useContext(SiteContext);

	const handleSubmit = (values, actions) => {
		setData(prev => ({ ...prev, values }))
		moveNextStep(true);
	}

	// TODO: Mutating state
	const onRemoveArt = (i) => {
		// if (artCount === 0) return
		// setArtCount(artCount - 1)
		// data.art_data.splice(i, 1)
	}
	const onAddArt = (ev, i) => {
		// setArtCount(artCount + 1)
		// data.art_data.push({
		//     description: '',
		//     share_percent: 0,
		//     general_description: '',
		//     art_is_desc: 'לא',
		//     inheritor_type: '',
		//     inheritor: []
		// })
	}

	const updateArtData = (ev, i, credentials = 'type') => {
		// if (credentials === 'type') {
		//     data.art_data[i].type = ev.target.value
		// } else if (credentials === 'description') {
		//     data.vehicle_data[i].description = ev.target.value
		// } else if (credentials === 'share_percent') {
		//     data.art_data[i].share_percent = ev.target.value
		// } else if (credentials === 'general_description') {
		//     data.art_data[i].general_description = ev.target.value
		// } else if (credentials === 'art_is_desc') {
		//     data.art_data[i].art_is_desc = ev.target.value
		// } else if (credentials === 'associationName') {
		//     data.art_data[i].associationName = ev.target.innerText
		// } else if (credentials === 'inheritor_type') {
		//     data.art_data[i].inheritor_type = ev.target.value
		// }
	}

	const renderArtsForm = (values) => {
		// const ArtFormArr = []
		// for (let i = 0; i < data.art_data.length; i++) {
		//     ArtFormArr.push(
		//         <div key={`${i}`} className="flex gap column direction-rtl">
		//             <h4 className='direction-rtl' style={{ margin: '0', display: (i >= 1) ? "flex" : "none" }}>סוג האומנות {i + 1}</h4>
		//             <div className='partner-details'>
		//                 <textarea onChange={(ev) => updateArtData(ev, i, "description")} name={`description${i}`} placeholder='תיאור מדויק של האומנות'></textarea>
		//             </div>
		//             <h4 style={{ margin: '10px 0' }}>מי יירש את האומנות?</h4>
		//             <div className="status-group flex space-between input-btn">
		//                 <label className={`${values.values.art_data[i].inheritor_type === "יורשים" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateArtData(ev, i, "inheritor_type")} name={`inheritor_type`} value="יורשים" />
		//                     יורשים
		//                 </label>
		//                 <label className={`${values.values.art_data[i].inheritor_type === "ילדים" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateArtData(ev, i, "inheritor_type")} name={`inheritor_type`} value="ילדים" />
		//                     ילדים
		//                 </label>
		//                 <label className={`${values.values.art_data[i].inheritor_type === "בת זוג/בן זוג" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateArtData(ev, i, "inheritor_type")} name={`inheritor_type`} value="בת זוג/בן זוג" />
		//                     בת זוג/בן זוג
		//                 </label>
		//                 <label className={`${values.values.art_data[i].inheritor_type === "עמותה" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateArtData(ev, i, "inheritor_type")} name={`inheritor_type`} value="עמותה" />
		//                     עמותה
		//                 </label>
		//             </div>
		//             {values.values.art_data[i].inheritor_type === 'עמותה' &&
		//                 <StepThreeAssociations i={i} updatePropertyData={updateArtData} />
		//             }
		//             {values.values.art_data[i].inheritor_type === 'ילדים' &&
		//                 <StepThreekids propertyData={values.values.art_data[i]} data={data} i={i} />
		//             }
		//             <h4 style={{ margin: '10px 0' }}>מהי צורת החלוקה?</h4>
		//             <Field onChange={(ev) => updateArtData(ev, i, "share_percent")} name="share_percent" min="0" max="100" type="number" />
		//             <h4 style={{ margin: '10px 0' }}>ב.	תרצה להוסיף הערה בכתב לחלוקה? (לדוגמה- "את הציור לישראלה והפסל לישראל") </h4>
		//             <div className="status-group flex space-between input-btn">
		//                 <label className={`${values.values.art_data[i].art_is_desc === "לא" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateArtData(ev, i, 'art_is_desc')} name="art_is_desc" value="לא" />
		//                     לא
		//                 </label>
		//                 <label className={`${values.values.art_data[i].art_is_desc === "כן" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateArtData(ev, i, 'art_is_desc')} name="art_is_desc" value="כן" />
		//                     כן
		//                 </label>
		//             </div>
		//             {values.values.art_data[i].art_is_desc === 'כן' &&
		//                 <textarea onChange={(ev) => updateArtData(ev, i, "general_description")} name={`general_description${i}`} placeholder="תיאור"></textarea>
		//             }
		//             <h4 style={{ margin: '0', display: (i === data.art_data.length - 1) ? "flex" : "none" }}>האם קיימים פרטי אומנות נוספים?</h4>
		//             <div className='flex gap row'>
		//                 <div className='flex align-center pointer add-btn' style={{ display: (i === data.art_data.length - 1) ? "flex" : "none" }} onClick={onAddArt}>כן</div>
		//                 <div className='flex align-center pointer add-btn' style={{ visibility: (i === data.art_data.length - 1 && i > 0) ? "visible" : "hidden" }} onClick={() => onRemoveArt(i)}>הסר אומנות</div>
		//             </div>
		//         </div>
		//     )
		// }
		// return ArtFormArr
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
						<Form>
							<div role="group">
								<h4 style={{ margin: '10px 0' }}>האם קיימים ברשותך אומנות?</h4>
								<div className="status-group flex space-between input-btn">
									<label className={`${values.art === "לא" ? 'active' : ''}`}>
										<Field type="radio" name="art" value="לא" />
										לא
									</label>
									<label className={`${values.art === "כן" ? 'active' : ''}`}>
										<Field type="radio" name="art" value="כן" />
										כן
									</label>
								</div>
							</div>
							{values.art === 'כן' &&
								<div className="input-container-formik real-estate-container direction-ltr" >
									{renderArtsForm()}
								</div>
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
