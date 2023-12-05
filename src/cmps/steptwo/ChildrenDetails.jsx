import { useFormikContext } from 'formik'
import React from 'react'
import translation, { answers } from '../../store/translation'
import ItemsList from '../utils/ItemsList/ItemsList'
import { defaultChildData } from '../../store/context'
import ChildItem from './ChildItem'

function ChildrenDetails() {
    const { values } = useFormikContext()

    if (values.kids !== answers.yes) {
        return <></>
    }

    return (
        <ItemsList
            name="kids_data"
            itemTitle={translation.kids}
            defaultValue={defaultChildData}
            renderItem={(dataItem, itemName) => <ChildItem dataItem={dataItem} itemName={itemName} />} />
    )
}

export default ChildrenDetails