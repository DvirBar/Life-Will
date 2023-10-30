import { Field } from "formik"

export const ChildDetails = ({ values, arrayHelpers, i }) => {
	debugger;
	return (
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
	);
}