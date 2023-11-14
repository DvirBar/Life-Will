import React from 'react'
import FormWrapper from '../FormWrapper'
import YesNoRadio from '../../formikcomponents/YesNoRadio'
import translation, { answers } from '../../../store/translation'
import ItemsList from '../ItemsList/ItemsList'
import { defaults } from '../../../store/context'
import InheritedItem from './InheritedItem'
import { inheritedItemValidation } from '../validation'

function InheritedItemForm({ name }) {
    const itemDataName = `${name}_data`

    return (
        <FormWrapper
            validationSchema={inheritedItemValidation(name)}
            renderItem={(values) => {
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
            }}
        />

    )
}

export default InheritedItemForm