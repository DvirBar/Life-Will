import React from 'react'
import Step3RealEstate from './Step3RealEstate'
import Title from '../Title'
import Subtitle from '../Subtitle'
import translation, { answers } from '../../../store/translation'
import DocPage from '../DocPage'
import data from '../../../store/sampleData'
import Step3FutureRealEstate from './Step3FutureRealEstate'

function Step3() {
    return (
        <>
            <DocPage>
                <Title>{translation.step3}</Title>
                <Subtitle>{translation.real_estate_title}</Subtitle>
                <Step3RealEstate />
                <Step3FutureRealEstate />
            </DocPage>
        </>
    )
}

export default Step3