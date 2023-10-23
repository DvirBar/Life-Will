import { StyleSheet, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    table: {
        display: "flex",
    }
})

function Table({ children }) {
    return (
        <View style={styles.table}>
            {children}
        </View>
    )
}

export default Table