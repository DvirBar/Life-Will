import { Field, useFormikContext } from 'formik';
import React from 'react'
import ButtonSelect from './buttonSelect/ButtonSelect';

const FormikButtonSelect = ({ name, children }) => {
    const {
        setFieldValue,
    } = useFormikContext()

    const handleChange = (_event, value) => {
        setFieldValue(name, value)
    }

    return (
        <Field name={name}>
            {({ field }) => (
                <ButtonSelect
                    onChange={handleChange}
                    value={field.value}
                >
                    {children}
                </ButtonSelect>
            )}
        </Field>

    );
};


export default FormikButtonSelect