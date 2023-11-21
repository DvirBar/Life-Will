import React from 'react'
import translation, { answers } from '../../../store/translation'
import { useFormikContext } from 'formik'
import ItemsList from '../ItemsList/ItemsList'
import { defaults } from '../../../store/context'
import InheritedItem from './InheritedItem'
import YesNoRadio from '../../formikcomponents/YesNoRadio'

function InheritedTopic({ name, itemDataName }) {
    const { values } = useFormikContext()

    return (
        <>
            <YesNoRadio name={name} question={translation[name]} />
            {values[name] === answers.yes &&
                <ItemsList
                    name={itemDataName}
                    values={values}
                    title={translation[`${name}_title`]}
                    defaultValue={defaults[name]}
                    renderItem={(_dataItem, itemName) =>
                        <InheritedItem
                            name={name}
                            itemDataName={itemDataName}
                            itemName={itemName} />} />
            }
        </>
    )
}

export default InheritedTopic