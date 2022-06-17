import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FormElement from '../../components/FormElement'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const NewDropdown = ({ children, data, icon, elementStyle }: any) => {
    const [open, setOpen] = React.useState(false)

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
                setOpen(prev => !prev)
            }}>
            <FormElement
                icon={icon}
                style={elementStyle}
                childrenStyle={{
                    paddingTop: 5
                }}>
                {children}
            </FormElement>
            {
                open && (
                    <View style={{
                        top: 65,
                        position: 'absolute',
                        zIndex: 99,
                        left: 0,
                        right: 0,
                        maxHeight: 250,
                        backgroundColor: 'white'
                    }}>
                        {
                            data.map((item: string) => (
                                <Text style={{
                                    margin: 15,
                                    fontSize: 14,
                                    color: '#727272',
                                }}>{item}</Text>
                            ))
                        }
                    </View>
                )
            }
        </TouchableOpacity>
    )
}

export default NewDropdown

const styles = StyleSheet.create({})