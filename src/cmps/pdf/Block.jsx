import { StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#662A6820',
        borderRadius: 5,
        padding: 5,
        gap: 8,
        flexDirection: 'column',
        marginVertical: 7
    }
})

function Block({ children }) {
    return (
        <View style={styles.view} wrap={false}>
            {children}
        </View>
    )
}

export default Block