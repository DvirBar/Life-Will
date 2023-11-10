import React from 'react'
import { TextField } from '@mui/material'
import { FastField } from 'formik'

function MuiTextField({
	field,
	form: { touched, errors },
	name,
	options,
	children,
	label,
	fullWidth,
	percent,
	...props
}) {
	const fieldName = name || field.name;
	const handleChange = (event) => {
		if (percent) {
			if ((!isNaN(event.target.value) && (event.target.value >= 0 && event.target.value <= 100)) || event.target.value === "." || event.target.value === '') {
				field.onChange(event)
			}
		}
		else {
			field.onChange(event)
		}
	}

	const percentFieldWidthStyle = {
		width: "60px"
	}

	return (
		<TextField
			fullWidth={fullWidth}
			{...props}
			{...field}
			value={field.value}
			onChange={handleChange}
			name={fieldName}
			label={label}
			variant="outlined"
			size='small'
			sx={percent ? percentFieldWidthStyle : {}}
		/>
	)
}

function FormikTextField({ name, label, fullWidth, percent, placeholder, type = "text" }) {
	return (
		<FastField
			name={name}
			component={MuiTextField}
			label={label}
			fullWidth={fullWidth}
			percent={percent}
			placeholder={placeholder}
			type={type}
		/>
	)
}

export default FormikTextField