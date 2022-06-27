/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */

import React from 'react'

import {
    View, TextInput, Text, StyleSheet, Platform
} from 'react-native'

export const KeyCode = (props: any) => {
    const [inputValue, setInputValue] = React.useState(props.defaultValue)
    React.useEffect(() => {
        if (props.value !== undefined && props.value !== inputValue) {
            setInputValue(props.value)
        }
    }, [props.value])

    if (props.value !== undefined && !props.onChange) {
        throw new Error(
            'To use the KeycodeInput as a controlled component, '
            + 'you need to supply both the value and onChange props.'
        )
    }

    const changeText = (value: any) => {
        if (props.uppercase) {
            value = value.toUpperCase()
        }
        if (props.alphaNumeric) {
            value = value.replace('/[^a-z0-9]/i', '')
        }

        setInputValue(value)

        if (props.onChange) {
            props.onChange(value)
        }

        if (value.length < props.length) {
            return
        }

        if (props.onComplete) {
            props.onComplete(value)
        }
    }

    const renderBoxes = () => {
        const elements = []
        let i = 0
        const vals = inputValue.split('')
        while (i < props.length) {
            const active = i === inputValue.length

            elements.push(
                <View style={[styles.box, i < inputValue.length && styles.boxActive]} key={i}>
                    <Text style={styles.text}>{
                        (vals[i] && (props.secureTextEntry ? '•' : vals[i])) || ''
                    }</Text>
                </View>
            )

            i++
        }

        return elements
    }

    const keyboardType = Platform.select({
        ios: 'number-pad',
        android: 'numeric'
    })

    return (
        <View style={[styles.container, props.style]}>
            {renderBoxes()}
            <TextInput
                ref={props.inputRef}
                style={[styles.input, { color: props.textColor, width: 42 * props.length }]}
                autoFocus={props.autoFocus}
                value={inputValue}
                keyboardType={keyboardType as any}
                maxLength={props.length}
                clearButtonMode='never'
                textContentType='oneTimeCode'
                returnKeyType='next'
                underlineColorAndroid='transparent'
                onChangeText={changeText}
                caretHidden />
        </View>
    )
}

KeyCode.defaultProps = {
    tintColor: '#007AFF',
    textColor: '#000',
    length: 4,
    autoFocus: true,
    numeric: false,
    alphaNumeric: true,
    uppercase: true,
    defaultValue: ''
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    input: {
        height: 48,
        position: 'absolute',
        opacity: 0,
        zIndex: 100
    },
    box: {
        width: 42,
        height: 68,
        marginHorizontal: 5,
        borderRadius: 11,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#CDCDCD',
        alignItems: `center`,
        justifyContent: `center`
    },
    boxActive: {
        borderColor: '#3D21A2',
    },
    barActive: {
        height: 2,
        marginTop: -0.5
    },
    text: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 36,
        height: 36,
        textAlign: 'center',
        width: 32,
        color: '#000',
    }
})