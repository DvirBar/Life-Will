import React, { useContext } from 'react'
import { SiteContext } from '../../store/context';
import { Form, Formik } from 'formik';
import NavigationButtons from './NavigationButtons';
import styled from '@emotion/styled';

function FormWrapper({ validationSchema, renderItem }) {
    const {
        data,
        submitForm
    } = useContext(SiteContext);

    return (
        <Formik
            initialValues={data}
            onSubmit={submitForm}
            validationSchema={validationSchema}
        >
            {({ values }) => {
                return (
                    <StyledForm style={{ minWidth: "500px" }}>
                        <div>
                            {renderItem(values)}
                        </div>
                        <NavigationButtons />
                    </StyledForm>
                )
            }
            }
        </Formik>
    )
}

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 500px;
`

export default FormWrapper