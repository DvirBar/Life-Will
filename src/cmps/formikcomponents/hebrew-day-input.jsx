import { Field } from 'formik';
import FormikSelect from './FormikSelect';

export const HebrewDayInput = (props) => {
	const montArr = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב", "יג", "יד", "טו", "טז", "יז", "יח", "יט", "כ", "כא", "כב", "כג", "כד", "כה", "כו", "כז", "כח", "כט", "ל"];
	return (
		<FormikSelect name={props.name} label={props.label}>
			{montArr.map((day, index) => <option key={index}>{day}</option>)}
		</FormikSelect>
	);
}