import { Box, FormControl, InputLabel, Select } from '@mui/material'
import { Field } from 'formik'
import React from 'react'
import translation from '../../store/translation';


function MuiSelect({
	field,
	form: { touched, errors },
	name,
	options,
	children,
	label,
	...props
}) {
	const fieldName = name || field.name;
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl sx={{ minWidth: 120 }}>
				<InputLabel id={fieldName}>{label}</InputLabel>
				<Select
					{...field}
					{...props}
					labelId={fieldName}
					name={fieldName}
					label={label}
				>
					{children}
				</Select>
			</FormControl>
		</Box>

	)
}

function FormikSelect({ name, label, children }) {
	return (
		<Field
			name={name}
			component={MuiSelect}
			label={label}
		>
			{children}
		</Field>
	)
}

export default FormikSelect