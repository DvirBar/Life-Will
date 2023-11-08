import React from 'react'
import { TextField } from '@mui/material'
import { Field } from 'formik'

function MuiTextField({
	field,
	form: { touched, errors },
	name,
	options,
	children,
	label,
	fullWidth,
	...props
}) {
	const fieldName = name || field.name;
	return (
		<TextField
			fullWidth={fullWidth}
			{...props}
			{...field}
			name={fieldName}
			label={label}
			variant="outlined"
		/>
	)
}

function FormikTextField({ name, label, fullWidth, placeholder, type = "text" }) {
	return (
		<Field
			name={name}
			component={MuiTextField}
			label={label}
			fullWidth={fullWidth}
			placeholder={placeholder}
			type={type}
		/>
	)
}

export default FormikTextField