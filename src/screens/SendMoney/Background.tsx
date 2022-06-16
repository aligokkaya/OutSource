import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

interface BackgroundProps {
    children?: any
    leftIcon?: any
    rightIcon?: any
    title?: string
}

const Background = ({ children, leftIcon, rightIcon, title }: BackgroundProps) => {
    return (
        <ImageBackground style={{
            flex: 1
        }}
            source={require('../../../images/bg.png')}>
            <View style={{
                height: 44,
                marginBottom: 10,
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {
                    leftIcon ? (
                        <FontAwesomeIcon icon={leftIcon} color="#FFF" size={25} />
                    ) : (
                        <View />
                    )
                }
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#FFF'
                }}>{title}</Text>

                {
                    rightIcon ? (
                        <FontAwesomeIcon icon={rightIcon} color="#FFF" size={25} />
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