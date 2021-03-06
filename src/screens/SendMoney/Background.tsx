import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

interface BackgroundProps {
    children?: any
    customTitle?: any
    leftIcon?: any
    rightIcon?: any
    title?: string
    onRightPress?: any
}

const Background = ({ children, leftIcon, rightIcon, title, customTitle, onRightPress }: BackgroundProps) => {
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()

    return (
        <ImageBackground style={{
            flex: 1
        }}
            source={require('../../../images/bg.png')}>
            <View style={{
                marginTop: insets.top,
                height: 44,
                marginBottom: 10,
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {
                    leftIcon ? (
                        <TouchableOpacity onPress={navigation.goBack}>
                            <FontAwesomeIcon icon={leftIcon} color="#FFF" size={25} />
                        </TouchableOpacity>
                    ) : (
                        <View />
                    )
                }
                {
                    customTitle ? customTitle : (
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: '#FFF'
                        }}>{title}</Text>
                    )
                }
                {
                    rightIcon ? (
                        <TouchableOpacity onPress={onRightPress}>
                            <FontAwesomeIcon icon={rightIcon} color="#FFF" size={25} />
                        </TouchableOpacity>
                    ) : (
                        <View />
                    )
                }
            </View>
            {children}
        </ImageBackground>
    )
}

export default Background

const styles = StyleSheet.create({})