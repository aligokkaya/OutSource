import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormElement = ({ style, children }) => (
    <View style={[styles.container, style]}>
        {children}
    </View>
)

export default FormElement

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        marginTop: 15,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})