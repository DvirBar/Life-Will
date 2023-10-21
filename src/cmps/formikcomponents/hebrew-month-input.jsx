import { Field } from 'formik';

export const HebrewMonthInput = (props) => {
	const montArr = ["תשרי", "חשון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "תמוז", "תמוז", "אב", "אלול"];
	return (
		<Field as="select" name={props.name}>
			{montArr.map(month => <option>{month}</option>)}
		</Field>
	);
}