import { StyleSheet, View } from '@react-pdf/renderer'
import React from 'react'

const style = StyleSheet.create({
    devider: {
        border: "0.5px solid #ccc"
    }
})
function Divider() {
    return (
        <View style={style.devider}></View>
    )
}

export default Divider