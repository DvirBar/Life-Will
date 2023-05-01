import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const stepOneContinueValidationSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
})

export default function StepOneContinue({ next, prev, data }) {

    const handleSubmit = (values) => {
        next(values, false, true)
    }

    return (
        <Formik
            validationSchema={stepOneContinueValidationSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {({ values }) => (
                <Form>
                    <p>Email</p>
                    <Field name="email" />
                    <ErrorMessage name="email" />

                    {/* <button type="button" onClick={() => prev(values)}>Back</button> */}
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
}
