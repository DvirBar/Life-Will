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
	...props
}) {
	const fieldName = name || field.name;
	return (
		<TextField
			{...props}
			{...field}
			name={fieldName}
			label={label}
			variant="outlined"
		/>
	)
}

function FormikTextField({ name, label }) {
	return (
		<Field
			name={name}
			component={MuiTextField}
			label={label}
		/>
	)
}

export default FormikTextField