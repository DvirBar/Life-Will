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
            {() => (
                <Form className="input-container">
                    <div className="input-container-formik">
                        <Field name="person_id" type="number" placeholder='תז' />
                        <Field name="passport_id" type="number" placeholder='מספר דרכון' />
                        <Field name="email" placeholder="מייל" />
                        {/* <ErrorMessage name="email" /> */}
                        <Field name="phone" type="number" placeholder='פלאפון' />
                        <Field name="address" placeholder='רחוב ומספר בית' />
                        {/* <Field name="company" placeholder='שם חברה / עסק' /> */}
                        {/* <Field name="city" placeholder='עיר / יישוב' /> */}
                        {/* <Field name="companyID" placeholder='ח.פ' /> */}
                        {/* <Field name="" placeholder='' /> */}
                    </div>
                    {/* <button type="button" onClick={() => prev(values)}>Back</button> */}
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
}
