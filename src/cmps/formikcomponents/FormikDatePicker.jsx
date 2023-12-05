import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { heIL } from '@mui/x-date-pickers/locales';

import dayjs from 'dayjs';
import { Field, getIn } from 'formik';
import FormError from './FormError';

const MuiDatePicker = ({
	field,
	form: { touched, errors, setFieldValue },
	meta,
	name,
	label,
	...props
}) => {
	const fieldName = name || field.name;
	const fieldValue = dayjs(field.value);

	// TODO: Translate datepicker to Hebrew 
	const isTouched = getIn(touched, fieldName);
	const error = isTouched ? getIn(errors, fieldName) : ""
	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs} adapterLocale='he'
			localeText={heIL.components.MuiLocalizationProvider.defaultProps.localeText}
		>
			<DatePicker
				defaultValue={fieldValue}
				label={label}
				name={fieldName}
				labelId={label}
				format='DD/MM/YYYY'
				onChange={(date) => setFieldValue(fieldName, date.format("DD/MM/YYYY"))}
			/>
			{isTouched && error &&
				<FormError>
					{error}
				</FormError>
			}
		</LocalizationProvider>
	)
}
const FormikDatePicker = ({ name, label, placeholder }) => {
	const fieldPlaceholder = placeholder || "dd/mm/yyyy"
	return <Field
		label={label}
		name={name}
		component={MuiDatePicker} type="date"
		placeholder={fieldPlaceholder}
	/>
}

export default FormikDatePicker;