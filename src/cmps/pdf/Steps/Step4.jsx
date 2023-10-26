import React from 'react'
import DocPage from '../DocPage'
import Title from "../Title"
import translation, { inheritanceKeys, inheritanceKeysStep4 } from "../../../store/translation"
import ItemInheritanceBlock from '../ItemInheritanceBlock'
import data from '../../../store/sampleData'

function Step4() {
    return (
        <DocPage>
            <Title>{translation.step4}</Title>
            {Object.keys(inheritanceKeysStep4).map(key =>
                <ItemInheritanceBlock itemKey={inheritanceKeysStep4[key]} />
            )}
        </DocPage>
    )
}

export default Step4