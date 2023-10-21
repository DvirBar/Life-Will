import { Field } from 'formik';

export const HebrewDayInput = (props) => {
	const montArr = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב", "יג", "יד", "טו", "טז", "יז", "יח", "יט", "כ", "כא", "כב", "כג", "כד", "כה", "כו", "כז", "כח", "כט", "ל"];
	return (
		<Field as="select" name={props.name}>
			{montArr.map(day => <option>{day}</option>)}
		</Field>
	);
}