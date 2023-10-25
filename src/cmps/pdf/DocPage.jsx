import { Page, StyleSheet, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        gap: 10
    }
});

function DocPage({ children }) {
    return (
        <Page wrap size="A4" style={styles.page}>
            <View style={styles.section}>
                {children}
            </View>
        </Page>
    )
}

export default DocPage