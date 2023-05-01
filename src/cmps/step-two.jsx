import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const stepTwoValidationSchema = Yup.object({
    money: Yup.string().required().label("Money"),
})

export default function StepTwo({ data, next, prev }) {

    const handleSubmit = (values) => {
        next(values, true)
    }

    return (
        <Formik
            validationSchema={stepTwoValidationSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <p>Do you have money?</p>
                    <Field name="money" />
                    <ErrorMessage name="money" />

                    <Field as="select" name="kids">
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </Field>

                    <button type="submit">Next</button>
                </Form>
            )}

        </Formik>
    )
}
