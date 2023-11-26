import MenuItem from '@mui/material/MenuItem';
import FormikSelect from './FormikSelect';

export const HebrewDayInput = (props) => {
	const montArr = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב", "יג", "יד", "טו", "טז", "יז", "יח", "יט", "כ", "כא", "כב", "כג", "כד", "כה", "כו", "כז", "כח", "כט", "ל"];
	return (
		<FormikSelect name={props.name} label={props.label}>
			{montArr.map((day, index) => <MenuItem key={index} value={day}>{day}</MenuItem>)}
		</FormikSelect>
	);
}