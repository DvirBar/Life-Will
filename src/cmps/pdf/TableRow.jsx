import { StyleSheet, View } from '@react-pdf/renderer'
import React from 'react'

function TableRow({ children, outerStyles }) {
    const styles = StyleSheet.create({
        row: {
            width: "auto",
            flexDirection: "row-reverse",
            direction: "rtl",
            borderRadius: "5",
            ...outerStyles
        },
    })

    return (
        <View style={styles.row}>
            {children}
        </View>
    )
}

export default TableRow