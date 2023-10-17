import React, { useContext, useState } from 'react';

import { Formik, Form, Field } from "formik";
import StepThreeAssociations from './step-three-associations';
import StepThreekids from './step-three-kids';
import { SiteContext } from '../store/context';


export default function StepFourJewelry({ formikProps }) {
	const [jewelryCount, setJewelryCount] = useState(0)

	//AM17102023 - to delete
	// const handleSubmit = (values) => {
	// 	next(values)
	// }

	const {
		moveNextStep
	} = useContext(SiteContext)

	// TODO: Mutating state
	const onRemoveJewelry = (i) => {
		// if (jewelryCount === 0) return
		// setJewelryCount(jewelryCount - 1)
		// data.jewelry_data.splice(i, 1)
	}
	const onAddJewelry = (ev, i) => {
		// setJewelryCount(jewelryCount + 1)
		// data.jewelry_data.push({
		//     description: '',
		//     share_percent: 0,
		//     general_description: '',
		//     jewelry_is_desc: 'לא',
		//     inheritor_type: '',
		//     inheritor: []
		// })
	}

	const updateJewelryData = (ev, i, credentials = 'type') => {
		// if (credentials === 'type') {
		//     data.jewelry_data[i].type = ev.target.value
		// } else if (credentials === 'description') {
		//     data.vehicle_data[i].description = ev.target.value
		// } else if (credentials === 'share_percent') {
		//     data.jewelry_data[i].share_percent = ev.target.value
		// } else if (credentials === 'general_description') {
		//     data.jewelry_data[i].general_description = ev.target.value
		// } else if (credentials === 'jewelry_is_desc') {
		//     data.jewelry_data[i].jewelry_is_desc = ev.target.value
		// } else if (credentials === 'associationName') {
		//     data.jewelry_data[i].associationName = ev.target.innerText
		// } else if (credentials === 'inheritor_type') {
		//     data.jewelry_data[i].inheritor_type = ev.target.value
		// }
	}

	const renderJewelrysForm = (values) => {
		// const JewelryFormArr = []
		// for (let i = 0; i < data.jewelry_data.length; i++) {
		//     JewelryFormArr.push(
		//         <div key={`${i}`} className="flex gap column direction-rtl">
		//             <h4 className='direction-rtl' style={{ margin: '0', display: (i >= 1) ? "flex" : "none" }}>סוג התכשיט {i + 1}</h4>
		//             <div className='partner-details'>
		//                 <textarea onChange={(ev) => updateJewelryData(ev, i, "description")} name={`description${i}`} placeholder='תיאור מדויק של התכשיט'></textarea>
		//             </div>
		//             <h4 style={{ margin: '10px 0' }}>מי יירש את התכשיט?</h4>
		//             <div className="status-group flex space-between input-btn">
		//                 <label className={`${values.values.jewelry_data[i].inheritor_type === "יורשים" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateJewelryData(ev, i, "inheritor_type")} name={`inheritor_type`} value="יורשים" />
		//                     יורשים
		//                 </label>
		//                 <label className={`${values.values.jewelry_data[i].inheritor_type === "ילדים" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateJewelryData(ev, i, "inheritor_type")} name={`inheritor_type`} value="ילדים" />
		//                     ילדים
		//                 </label>
		//                 <label className={`${values.values.jewelry_data[i].inheritor_type === "בת זוג/בן זוג" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateJewelryData(ev, i, "inheritor_type")} name={`inheritor_type`} value="בת זוג/בן זוג" />
		//                     בת זוג/בן זוג
		//                 </label>
		//                 <label className={`${values.values.jewelry_data[i].inheritor_type === "עמותה" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateJewelryData(ev, i, "inheritor_type")} name={`inheritor_type`} value="עמותה" />
		//                     עמותה
		//                 </label>
		//             </div>
		//             {values.values.jewelry_data[i].inheritor_type === 'עמותה' &&
		//                 <StepThreeAssociations i={i} updatePropertyData={updateJewelryData} />
		//             }
		//             {values.values.jewelry_data[i].inheritor_type === 'ילדים' &&
		//                 <StepThreekids propertyData={values.values.jewelry_data[i]} data={data} i={i} />
		//             }
		//             <h4 style={{ margin: '10px 0' }}>מהי צורת החלוקה?</h4>
		//             <Field onChange={(ev) => updateJewelryData(ev, i, "share_percent")} name="share_percent" min="0" max="100" type="number" />
		//             <h4 style={{ margin: '10px 0' }}>ב.	תרצה להוסיף הערה בכתב לחלוקה (לדוגמה- "את הטבעת מהחתונה לישראלה והעגילים עם הפנינים לישראל")?</h4>
		//             <div className="status-group flex space-between input-btn">
		//                 <label className={`${values.values.jewelry_data[i].jewelry_is_desc === "לא" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateJewelryData(ev, i, 'jewelry_is_desc')} name="jewelry_is_desc" value="לא" />
		//                     לא
		//                 </label>
		//                 <label className={`${values.values.jewelry_data[i].jewelry_is_desc === "כן" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateJewelryData(ev, i, 'jewelry_is_desc')} name="jewelry_is_desc" value="כן" />
		//                     כן
		//                 </label>
		//             </div>
		//             {values.values.jewelry_data[i].jewelry_is_desc === 'כן' &&
		//                 <textarea onChange={(ev) => updateJewelryData(ev, i, "general_description")} name={`general_description${i}`} placeholder="תיאור"></textarea>
		//             }
		//             <h4 style={{ margin: '0', display: (i === data.jewelry_data.length - 1) ? "flex" : "none" }}>האם קיים ברשותך תכשיט נוסף?</h4>
		//             <div className='flex gap row'>
		//                 <div className='flex align-center pointer add-btn' style={{ display: (i === data.jewelry_data.length - 1) ? "flex" : "none" }} onClick={onAddJewelry}>כן</div>
		//                 <div className='flex align-center pointer add-btn' style={{ visibility: (i === data.jewelry_data.length - 1 && i > 0) ? "visible" : "hidden" }} onClick={() => onRemoveJewelry(i)}>הסר תכשיט</div>
		//             </div>
		//         </div>
		//     )
		// }
		// return JewelryFormArr
	}

	return (
		<>
			<div role="group">
				<h4 style={{ margin: '10px 0' }}>האם קיימים ברשותך תכשיטים?</h4>
				<div className="status-group flex space-between input-btn">
					<label className={`${formikProps.values.jewelry === "לא" ? 'active' : ''}`}>
						<Field type="radio" name="jewelry" value="לא" />
						לא
					</label>
					<label className={`${formikProps.values.jewelry === "כן" ? 'active' : ''}`}>
						<Field type="radio" name="jewelry" value="כן" />
						כן
					</label>
				</div>
			</div>
			{formikProps.values.values.jewelry === 'כן' &&
				<div className="input-container-formik real-estate-container direction-ltr" >
					{renderJewelrysForm(formikProps)}
				</div>
			}



			<button onClick={() => moveNextStep()}>המשך</button>
		</>
	)
}
