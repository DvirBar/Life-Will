import React from 'react'
import DocPage from '../../DocPage'
import Title from '../../Title'
import translation from '../../../../store/translation'
import Step2Partners from './Page2/Step2Partners'
import Step2Kids from './Page2/Step2Kids'
import Divider from '../../Divider'
import Step2Guardians from './Page2/Step2Guardians'
import MoreNextPage from '../../MoreNextPage'
import { StyleSheet, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    page: {
        display: 'flex'
    },
    view: {
        flex: 'auto',
        gap: 5
    }
})

function Step2Page1() {
    return (
        <DocPage style={styles.page}>
            <View style={styles.view}>
                <Title>{translation.step2}</Title>
                <Step2Partners />
                <Divider />
                <Step2Kids />
                <Step2Guardians />
            </View>

            <MoreNextPage />
        </DocPage>
    )
}

export default Step2Page1