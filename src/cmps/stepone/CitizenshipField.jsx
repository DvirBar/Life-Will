import { useFormikContext } from 'formik'
import React from 'react'
import FormikTextField from '../formikcomponents/FormikTextField'
import translation, { answers } from '../../store/translation'

function CitizenshipField() {
    const { values } = useFormikContext()

    if (values.citizenship !== answers.yes) {
        return <></>
    }

    return (
        <FormikTextField
            name="passport_id"
            numeric
            label={translation.passport_id}
        />
    )
}

export default CitizenshipField