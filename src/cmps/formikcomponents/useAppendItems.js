import React, { useContext } from 'react'
import { SiteContext } from '../../store/context'

function useAppendItems() {
    const { data } = useContext(SiteContext)

    const onAppend = (key, defaultValues) => {

    }
}

export default useAppendItems