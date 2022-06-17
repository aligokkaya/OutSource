import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native'

interface CheckboxProps extends TouchableOpacityProps {
    checkhed: boolean
    text: string
    style: any
}
const CustomCheckbox: React.FC<CheckboxProps> = ({ text, style, ...res }) => {
    const [checkhed, setChecked] = React.useState(false)

    return (
        <View style={[styles.container, style]} {...res}>
            <TouchableOpacity {...res}
            onPress={() => setChecked(prev => !prev)}
            style={{ ...styles.checkBox, backgroundColor: checkhed ? "#3D21A2" : "#fff" }} >
                {
                    checkhed && <FontAwesomeIcon icon={faCheck} color="#fff" />
                }
            </TouchableOpacity>
            <View style={{ paddingLeft: 20, width: '95%' }}>
                <Text style={styles.boldContractText}>{text}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBox: {
        width: 25, 
        height: 25,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e7e7e7',
        justifyContent: 'center', alignItems: 'center'
    },
    boldContractText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#141414',
    },
    contractText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#141414',
    }
})
export default CustomCheckbox;