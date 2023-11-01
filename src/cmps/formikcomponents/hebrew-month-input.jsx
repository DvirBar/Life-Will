import { Field } from 'formik';
import FormikSelect from './FormikSelect';
export const HebrewMonthInput = (props) => {
	const montArr = ["", "תשרי", "חשון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "תמוז", "תמוז", "אב", "אלול"];
	return (
		<FormikSelect name={props.name} label={props.label}>
			{montArr.map((month, index) => <option key={index}>{month}</option>)}
		</FormikSelect>
	);
}