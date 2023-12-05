import { Box, FormControl, FormHelperText, InputLabel, Select } from '@mui/material'
import { Field, getIn } from 'formik'
import React from 'react'

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
    const isTouched = getIn(touched, fieldName);
    const error = isTouched ? getIn(errors, fieldName) : ""
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ minWidth: 120 }} error={!!(isTouched && error)}>
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
                <FormHelperText>{error}</FormHelperText>
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