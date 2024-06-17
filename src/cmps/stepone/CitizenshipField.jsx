import { useFormikContext } from 'formik'
import React, { useContext } from 'react'
import FormikTextField from '../formikcomponents/FormikTextField'
import { answers } from '../../store/translation'
import { SiteContext } from '../../store/context'

function CitizenshipField() {
    const { values } = useFormikContext()


    const {
        translation
    } = useContext(SiteContext)

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