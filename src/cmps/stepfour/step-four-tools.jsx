import React, { useContext, useState } from 'react';

import { Formik, Form, Field } from "formik";
import StepThreeAssociations from '../stepthree/step-three-associations';
import StepThreekids from '../stepthree/step-three-kids';
import { SiteContext } from '../../store/context';


export default function StepFourTool() {
	const [toolCount, setToolCount] = useState(0)

	//TODO: to delete - not relevant
	// const handleSubmit = (values) => {
	//     next(values)
	// }

	const {
		data,
		setData,
		moveNextStep
	} = useContext(SiteContext);

	const handleSubmit = (values, actions) => {
		setData(prev => ({ ...prev, values }))
		moveNextStep();
	}

	// TODO: State mutation
	const onRemoveTool = (i) => {
		// if (toolCount === 0) return
		// setToolCount(toolCount - 1)
		// data.tool_data.splice(i, 1)
	}

	const onAddTool = (ev, i) => {
		// setToolCount(toolCount + 1)
		// data.tool_data.push({
		//     description: '',
		//     share_percent: 0,
		//     general_description: '',
		//     tool_is_desc: 'לא',
		//     inheritor_type: '',
		//     inheritor: []
		// })
	}

	const updateToolData = (ev, i, credentials = 'type') => {
		// if (credentials === 'type') {
		//     data.tool_data[i].type = ev.target.value
		// } else if (credentials === 'description') {
		//     data.tool_data[i].description = ev.target.value
		// } else if (credentials === 'type_percent') {
		//     data.tool_data[i].type_percent = ev.target.value
		// } else if (credentials === 'share_percent') {
		//     data.tool_data[i].share_percent = ev.target.value
		// } else if (credentials === 'general_description') {
		//     data.tool_data[i].general_description = ev.target.value
		// } else if (credentials === 'tool_is_desc') {
		//     data.tool_data[i].tool_is_desc = ev.target.value
		// } else if (credentials === 'associationName') {
		//     data.tool_data[i].associationName = ev.target.innerText
		// } else if (credentials === 'inheritor_type') {
		//     data.tool_data[i].inheritor_type = ev.target.value
		// }
	}

	const renderToolsForm = (values) => {
		// const ToolFormArr = []
		// for (let i = 0; i < data.tool_data.length; i++) {
		//     ToolFormArr.push(
		//         <div key={`${i}`} className="flex gap column direction-rtl">
		//             <h4 className='direction-rtl' style={{ margin: '0', display: (i >= 1) ? "flex" : "none" }}>סוג הכלי {i + 1}</h4>
		//             <div className="status-group flex space-between input-btn">
		//                 <label className={`${values.values.tool_data[i].type === "כלי כסף" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i)} name={`type`} value="כלי כסף" />
		//                     כלי כסף
		//                 </label>
		//                 <label className={`${values.values.tool_data[i].type === "כלי זהב" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i)} name={`type`} value="כלי זהב" />
		//                     כלי זהב
		//                 </label>
		//                 <label className={`${values.values.tool_data[i].type === "כלי רוכל" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i)} name={`type`} value="כלי רוכל" />
		//                     כלי רוכל
		//                 </label>
		//                 <label className={`${values.values.tool_data[i].type === "יודאיקה" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i)} name={`type`} value="יודאיקה" />
		//                     יודאיקה
		//                 </label>
		//                 <label className={`${values.values.tool_data[i].type === "אחר" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i)} name={`type`} value="אחר" />
		//                     אחר
		//                 </label>
		//             </div>
		//             {values.values.tool_data[i].type === 'אחר' &&
		//                 <div className='partner-details'>
		//                     <textarea onChange={(ev) => updateToolData(ev, i, "description")} name={`description${i}`} placeholder='תיאור מדויק של הכלי'></textarea>
		//                 </div>
		//             }
		//             <h4 style={{ margin: '10px 0' }}>מי יירש את הכלי?</h4>
		//             <div className="status-group flex space-between input-btn">
		//                 <label className={`${values.values.tool_data[i].inheritor_type === "יורשים" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i, "inheritor_type")} name={`inheritor_type`} value="יורשים" />
		//                     יורשים
		//                 </label>
		//                 <label className={`${values.values.tool_data[i].inheritor_type === "ילדים" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i, "inheritor_type")} name={`inheritor_type`} value="ילדים" />
		//                     ילדים
		//                 </label>
		//                 <label className={`${values.values.tool_data[i].inheritor_type === "בת זוג/בן זוג" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i, "inheritor_type")} name={`inheritor_type`} value="בת זוג/בן זוג" />
		//                     בת זוג/בן זוג
		//                 </label>
		//                 <label className={`${values.values.tool_data[i].inheritor_type === "עמותה" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i, "inheritor_type")} name={`inheritor_type`} value="עמותה" />
		//                     עמותה
		//                 </label>
		//             </div>
		//             {values.values.tool_data[i].inheritor_type === 'עמותה' &&
		//                 <StepThreeAssociations i={i} updatePropertyData={updateToolData} />
		//             }
		//             {values.values.tool_data[i].inheritor_type === 'ילדים' &&
		//                 <StepThreekids propertyData={values.values.tool_data[i]} data={data} i={i} />
		//             }
		//             <h4 style={{ margin: '10px 0' }}>מהי צורת החלוקה?</h4>
		//             <Field onChange={(ev) => updateToolData(ev, i, "share_percent")} name="share_percent" min="0" max="100" type="number" />
		//             <h4 style={{ margin: '10px 0' }}>ב.	תרצה להוסיף הערה בכתב לחלוקה (לדוגמה- "את הגביע לישראלה והפמוטים לישראל")? </h4>
		//             <div className="status-group flex space-between input-btn">
		//                 <label className={`${values.values.tool_data[i].tool_is_desc === "לא" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i, 'tool_is_desc')} name="tool_is_desc" value="לא" />
		//                     לא
		//                 </label>
		//                 <label className={`${values.values.tool_data[i].tool_is_desc === "כן" ? 'active' : ''}`}>
		//                     <Field type="radio" onClick={(ev) => updateToolData(ev, i, 'tool_is_desc')} name="tool_is_desc" value="כן" />
		//                     כן
		//                 </label>
		//             </div>
		//             {values.values.tool_data[i].tool_is_desc === 'כן' &&
		//                 <textarea onChange={(ev) => updateToolData(ev, i, "general_description")} name={`general_description${i}`} placeholder="תיאור"></textarea>
		//             }
		//             <h4 style={{ margin: '0', display: (i === data.tool_data.length - 1) ? "flex" : "none" }}>האם קיים ברשותך כלי נוסף?</h4>
		//             <div className='flex gap row'>
		//                 <div className='flex align-center pointer add-btn' style={{ display: (i === data.tool_data.length - 1) ? "flex" : "none" }} onClick={onAddTool}>כן</div>
		//                 <div className='flex align-center pointer add-btn' style={{ visibility: (i === data.tool_data.length - 1 && i > 0) ? "visible" : "hidden" }} onClick={() => onRemoveTool(i)}>הסר כלי</div>
		//             </div>
		//         </div>

		//     )
		// }
		// return ToolFormArr
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
								<h4 style={{ margin: '10px 0' }}>האם קיימים ברשותך כלים שהיית רוצה להוריש?</h4>
								<div className="status-group flex space-between input-btn">
									<label className={`${values.tool === "לא" ? 'active' : ''}`}>
										<Field type="radio" name="tool" value="לא" />
										לא
									</label>
									<label className={`${values.tool === "כן" ? 'active' : ''}`}>
										<Field type="radio" name="tool" value="כן" />
										כן
									</label>
								</div>
							</div>
							{values.tool === 'כן' &&
								<div className="input-container-formik real-estate-container direction-ltr" >
									<h4 className='direction-rtl' style={{ margin: '10px 0' }}>סוג הכלי</h4>
									{renderToolsForm(values)}
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
