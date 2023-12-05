import React from 'react'
import { TextField } from '@mui/material'
import { FastField, getIn } from 'formik'

function MuiTextField({
    field,
    form: { touched, errors },
    name,
    options,
    children,
    label,
    fullWidth,
    multiline,
    rows,
    percent,
    numeric,
    maxLength,
    disabled,
    ...props
}) {
    const fieldName = name || field.name;
    const handleChange = (event) => {
        if (maxLength && !isNaN(event.target.value?.length) && event.target.value.length > maxLength) {
            return
        }

        if (percent) {
            if ((!isNaN(event.target.value) && (event.target.value > 0 && event.target.value <= 100)) || event.target.value === "." || event.target.value === '') {
                field.onChange(event)
            }
        }

        else if (numeric) {
            if (((!isNaN(event.target.value)) && !event.target.value.includes(".")) || event.target.value === '') {
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
    const isTouched = getIn(touched, fieldName);
    const error = isTouched ? getIn(errors, fieldName) : ""
    return (
        <TextField
            fullWidth={fullWidth}
            {...props}
            {...field}
            error={error ? true : false}
            helperText={error}
            value={field.value}
            onChange={handleChange}
            name={fieldName}
            label={label}
            variant="outlined"
            size="medium"
            multiline={multiline}
            rows={rows}
            sx={percent ? percentFieldWidthStyle : {}}
            disabled={disabled}
        />
    )
}

function FormikTextField({
    name,
    label,
    fullWidth,
    percent,
    multiline,
    rows,
    numeric,
    maxLength,
    disabled
}) {
    return (
        <FastField
            name={name}
            component={MuiTextField}
            label={label}
            fullWidth={fullWidth}
            percent={percent}
            multiline={multiline}
            rows={rows}
            numeric={numeric}
            maxLength={maxLength}
            disabled={disabled}
        />
    )
}

export default FormikTextField