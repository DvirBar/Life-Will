import { useFormikContext } from 'formik'
import React, { useContext } from 'react'
import { answers, inheritanceKeys } from '../../store/translation'
import YesNoRadio from '../formikcomponents/YesNoRadio'
import ItemsList from '../utils/ItemsList/ItemsList'
import { defaults } from '../../store/data'
import RealEstateItem from './RealEstateItem'
import { SiteContext } from '../../store/context'

function StepThreeInheritedTopic() {
    const { values } = useFormikContext()
         
    const {
        translation
    } = useContext(SiteContext)

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