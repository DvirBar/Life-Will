import { useFormikContext } from 'formik'
import React from 'react'
import translation, { answers, inheritanceKeys } from '../../store/translation'
import YesNoRadio from '../formikcomponents/YesNoRadio'
import ItemsList from '../utils/ItemsList/ItemsList'
import { defaults } from '../../store/context'
import RealEstateItem from './RealEstateItem'

function StepThreeInheritedTopic() {
    const { values } = useFormikContext()
    return (
        <>
            <YesNoRadio name="real_estate" question={translation.real_estate} />
            {values.real_estate === answers.yes &&
                <ItemsList
                    name="real_estate_data"
                    values={values}
                    title={translation.real_estate_title}
                    defaultValue={defaults[inheritanceKeys.real_estate]}
                    renderItem={(dataItem, itemName) => <RealEstateItem dataItem={dataItem} itemName={itemName} />} />
            }
        </>
    )
}

export default StepThreeInheritedTopic