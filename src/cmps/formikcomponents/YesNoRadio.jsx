import React from 'react'
import { answers } from '../../store/translation'
import { Field } from 'formik'
import FormikRadioGroup from './FormikRadioGroup'

const options = [
    { value: answers.yes, label: answers.yes },
    { value: answers.no, label: answers.no }
]

function YesNoRadio({ name }) {
    return (
        <FormikRadioGroup name={name} options={options} />
    )
}

export default YesNoRadio