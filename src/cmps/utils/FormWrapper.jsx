import React, { useContext } from 'react'
import { SiteContext } from '../../store/context';
import { Form, Formik } from 'formik';
import NavigationButtons from './NavigationButtons';
import styled from '@emotion/styled';

function FormWrapper({ validationSchema, children, isFinalStep }) {
    const {
        data,
        submitForm
    } = useContext(SiteContext);

    return (
        <Formik
            initialValues={data}
            onSubmit={(values) => submitForm(values, isFinalStep)}
            validationSchema={validationSchema}
        >
            <StyledForm style={{ minWidth: "500px" }}>
                <StyledWrapper>
                    {children}
                </StyledWrapper>
                <NavigationButtons />
            </StyledForm>
        </Formik>
    )
}

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 500px;
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default FormWrapper