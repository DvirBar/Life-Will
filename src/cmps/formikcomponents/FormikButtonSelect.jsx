import { Field, useField, useFormikContext } from 'formik';
import React from 'react'
import ButtonSelect from './buttonSelect/ButtonSelect';

const FIELD_META_INDEX = 1

const FormikButtonSelect = ({ name, children }) => {
    const {
        setFieldValue,
    } = useFormikContext()

    const handleChange = (_event, value) => {
        setFieldValue(name, value)
    }

    const meta = useField(name)[FIELD_META_INDEX]

    return (
        <Field name={name}>
            {({ field }) => (
                <ButtonSelect
                    onChange={handleChange}
                    value={field.value}
                    error={meta.touched && meta.error}
                >
                    {children}
                </ButtonSelect>
            )}
        </Field>

    );
};



export default FormikButtonSelect