import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet, ActivityIndicator, View } from 'react-native'

interface ButonProps extends TouchableOpacityProps {
    title: string,
    invert?: boolean,
    icon?: any,
    iconProperty?: { size: number, color: string },
    loading?: boolean,
    textStyle?: any,
    butonStyle?: any,
}
const Button: React.FC<ButonProps> = ({ title, invert, loading, icon, butonStyle, textStyle, iconProperty, ...rest }) => {
    return (
        <TouchableOpacity
            style={[
                { ...styles.buttonContainer, ...butonStyle },
                invert && styles.invert
            ]}
            {...rest}>
            {
                icon && <View style={{ paddingRight: 5 }}><FontAwesomeIcon icon={icon} size={iconProperty?.size} color={iconProperty?.color} /></View>
            }
            {
                loading && <ActivityIndicator style={{ paddingRight: 10 }} />
            }
            <Text style={[
                { ...styles.buttonText, ...textStyle },
                invert && styles.invertText
            ]}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#FAF6FE',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    invert: {
        backgroundColor: '#3D21A2',
    },
    invertText: {
        color: '#FAF6FE'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3D21A2'
    }
})
export default Button;