import { useField } from 'formik'
import React from 'react'

const FORMIK_META_INDEX = 1

function useFormikHelpers(name) {
    const meta = useField(name)[FORMIK_META_INDEX]

    return {
        meta
    }
}

export default useFormikHelpers