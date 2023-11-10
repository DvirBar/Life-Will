import { CheckBox } from '@mui/icons-material';
import { FormControlLabel } from '@mui/material';
import { Field } from 'formik'
import React from 'react'


function FormikCheckbox({ name, label, checked, onChange }) {
    return (
        <Field
            name={name}
            label={label}
        >
            <FormControlLabel
                name={name}
                control={<CheckBox
                    checked={checked}
                    onChange={onChange}
                />}
                label={label}
            />
        </Field>
    )
}


export default FormikCheckbox