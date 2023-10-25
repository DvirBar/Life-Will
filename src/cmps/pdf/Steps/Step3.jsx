import React from 'react'
import Title from '../Title'
import Subtitle from '../Subtitle'
import translation, { answers, inheritanceKeys } from '../../../store/translation'
import DocPage from '../DocPage'
import data from '../../../store/sampleData'
import ItemInheritanceBlock from '../ItemInheritanceBlock'

function Step3() {
    return (
        <DocPage>
            <Title>{translation.step3}</Title>
            <ItemInheritanceBlock itemKey={inheritanceKeys.real_estate} />
            <ItemInheritanceBlock itemKey={inheritanceKeys.future_real_estate} />
        </DocPage>
    )
}

export default Step3