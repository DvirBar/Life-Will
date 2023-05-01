import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const stepOneValidationSchema = Yup.object({
    first_name: Yup.string().required().label("First Name"),
    last_name: Yup.string().required().label("Last Name")
})

export default function StepOne({ data, next }) {

    const handleSubmit = (values) => {
        console.log(values);
        next(values)
    }

    return (
        <Formik
            validationSchema={stepOneValidationSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <div className="input-container-formik">

                        <div className="input-container-formik">
                            <Field name="first_name" placeholder='שם פרטי' />
                            <ErrorMessage name="first_name" />

                            <Field name="last_name" />
                            <ErrorMessage name="last_name" />
                        </div>
                        <div className="input-container-formik">

                            <p>האם ערכת את הצוואה לבד?</p>
                            <Field as="select" name="edited_by">
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                            </Field>
                        </div>
                        <button type="submit">Next</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
