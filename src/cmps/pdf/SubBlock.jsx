import { StyleSheet, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    view: {
        paddingHorizontal: 10,
        borderRight: '3px solid #662A68',
        gap: 5,
        marginBottom: 10
    }
})

function SubBlock({ children }) {
    return (
        <View style={styles.view}>
            {children}
        </View>
    )
}

export default SubBlock