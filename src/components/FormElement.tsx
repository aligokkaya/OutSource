import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

interface FormElementProps {
    style?: any
    childrenStyle?: any
    children?: any
    icon?: any
}

const FormElement = ({ style, children, childrenStyle, icon }: FormElementProps) => (
    <View style={[styles.container, style]}>
        {
            icon ? (
                <>
                    <View style={[{ flex: 1 }, childrenStyle]}>
                        {children}
                    </View>
                    <FontAwesomeIcon icon={icon} color="#3D21A2" size={15} style={{
                        marginLeft: 8
                    }} />
                </>
            ) : (
                <>
                    {children}
                </>
            )
        }

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