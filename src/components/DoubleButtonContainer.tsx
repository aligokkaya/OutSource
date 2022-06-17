import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const DoubleButtonContainer = ({ selectedMenu, setSelectedMenu, option1Text, option2Text, style }: any) => {
    return (
        <View style={[doubleButonstyles.doubleButonContainer, style]}>
            <TouchableOpacity
                onPress={() => setSelectedMenu(0)}
                activeOpacity={.7}
                style={[doubleButonstyles.doubleButon, selectedMenu === 0 && doubleButonstyles.activeButton]}>
                <Text style={[selectedMenu === 0 ? doubleButonstyles.activeButonText : doubleButonstyles.doubleButonText]}>{option1Text}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setSelectedMenu(1)}
                activeOpacity={.7}
                style={[doubleButonstyles.doubleButon, selectedMenu === 1 && doubleButonstyles.activeButton]}>
                <Text style={[selectedMenu === 1 ? doubleButonstyles.activeButonText : doubleButonstyles.doubleButonText]}>{option2Text}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default DoubleButtonContainer

const doubleButonstyles = StyleSheet.create({
    doubleButonContainer: {
        height: 45,
        backgroundColor: '#FAF6FE',
        borderRadius: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginLeft: 20, marginRight: 20
    },
    doubleButon: {
        flex: 1, borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeButton: {
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {
            height: 0, width: 0
        },
        shadowOpacity: .10,
        shadowRadius: 3.14,
    },
    doubleButonText: {
        color: '#BDA7F5',
        fontWeight: '400',
        fontSize: 14
    },
    activeButonText: {
        color: '#3D21A2',
        fontWeight: 'bold',
        fontSize: 14
    }
})