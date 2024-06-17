import MenuItem from '@mui/material/MenuItem';
import FormikSelect from './FormikSelect';
export const HebrewMonthInput = (props) => {
    const montArr = ["תשרי", "חשון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיוון", "תמוז", "אב", "אלול"];
    return (
        <FormikSelect name={props.name} label={props.label}>
            {montArr.map((month, index) => <MenuItem key={index} value={month}>{month}</MenuItem>)}
        </FormikSelect>
    );
}