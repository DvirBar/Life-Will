import styled from '@emotion/styled';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const FormikRadioGroup = ({
    field,
    form: { touched, errors },
    name,
    options,
    children,
    ...props
}) => {
    const fieldName = name || field.name;
    return (
        <>
            <StyledRadioGroup {...field} {...props} name={fieldName}>
                {options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </StyledRadioGroup>

            {touched[fieldName] && errors[fieldName] && (
                <span >
                    {errors[fieldName]}
                </span>
            )}
        </>
    );
};

const StyledRadioGroup = styled(RadioGroup)`
    display: flex;
    flex-direction: row;
`

export default FormikRadioGroup