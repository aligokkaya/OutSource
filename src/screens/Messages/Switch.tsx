import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Switch = ({ on = true }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <View style={[{
                height: 12,
                borderRadius: 6,
                width: 40,
                backgroundColor: '#CCF8A7',
                transform: [{
                    translateX: 20
                }]
            }, !on && {
                backgroundColor: '#F3F3F3'
            }]} />
            <View style={[{
                width: 20,
                height: 20,
                borderRadius: 20,
                backgroundColor: '#48BF24',
            }, !on && {
                backgroundColor: '#B8B8B8',
                transform: [{
                    translateX: -20
                }]
            }]} />
        </View>
    )
}

export default Switch

const styles = StyleSheet.create({})