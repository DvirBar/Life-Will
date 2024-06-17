import { useFormikContext } from 'formik'
import React, { useContext } from 'react'
import translation, { answers } from '../../store/translation'
import ItemsList from '../utils/ItemsList/ItemsList'
import { defaultChildData } from '../../store/data'
import ChildItem from './ChildItem'
import { SiteContext } from '../../store/context'

function ChildrenDetails() {
    const { values } = useFormikContext()

    const {
        translation
    } = useContext(SiteContext)

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