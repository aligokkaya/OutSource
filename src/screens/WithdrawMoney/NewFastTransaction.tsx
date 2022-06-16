import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronRight, faChevronLeft, faCopy, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import FormElement from '../../components/FormElement'

const NewFastTransaction = () => {
    const navigation = useNavigation()

    return (
        <Background
            title='Yeni Hızlı İşlem Ekle'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                alignSelf: 'stretch',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <Text style={{
                    fontSize: 18,
                    color: '#141414',
                    fontWeight: '500',
                    marginTop: 30
                }}>Gerçekleştirilecek İşlem</Text>

                <FormElement style={{
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    flexDirection: 'row'
                }}>
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{
                            color: '#3D21A2',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>Transfer Tipi Seç</Text>
                        <Text
                            style={{
                                fontSize: 16,
                                lineHeight: 16,
                                fontWeight: '400',
                                color: '#141414',
                                padding: 0,
                                margin: 0,
                                marginTop: 4
                            }}
                        >{'Para Gönder'}</Text>
                    </View>
                    <FontAwesomeIcon icon={faChevronDown} color="#3A1BA3" size={15} />
                </FormElement>
                <View style={{ flex: 1 }} />
                <Button onPress={() => {
                    navigation.navigate('FastTransaction' as any)
                }} butonStyle={{ alignSelf: 'stretch' }} title="Hızlı İşlem Oluştur" invert />
                <Button butonStyle={{ alignSelf: 'stretch', marginTop: 15, marginBottom: 44 }} title="Vazgeç" />
            </View>
        </Background>
    )
}

export default NewFastTransaction

const styles = StyleSheet.create({})