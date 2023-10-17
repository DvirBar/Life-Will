import { useContext, useEffect, useState } from "react";
import { addUser } from "../store/user.actions";
import { Form, Formik } from "formik";
import FormStepsWrapper from "./form-steps-wrapper";
import { SiteContext } from "../store/context";

export default function MultiStepForm() {
    const {
        data
    } = useContext(SiteContext)


    // const makeRequest = (formData) => {
    //     dispatch(addUser({
    //         first_name: formData.first_name,
    //         last_name: formData.last_name,
    //         email: formData.email,
    //         birthDate: formData.birthDate,
    //     }))
    //     console.log("Form Submitted", formData);
    // }

    const handleSubmit = () => {

    }

    return (
        <div className='form'>
            <Formik
                // validationSchema={stepOneValidationSchema}
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {(values) =>
                    <Form>
                        <FormStepsWrapper values={values} />
                    </Form>
                }
            </Formik>
        </div>
    )
}