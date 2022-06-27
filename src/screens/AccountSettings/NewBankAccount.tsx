import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronDown, faChevronLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button'
import FormElement from '../../components/FormElement'
import NewDropdown from '../Deposit/NewDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'

const NewBankAccount = () => {
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} title='Yeni Banka Kaydet'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                padding: 15
            }}>

                <FormElement>
                    <View style={{
                        flex: 1,
                        transform: [{
                            translateY: 4
                        }]
                    }}>
                        <Text style={{
                            color: '#3D21A2',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>IBAN</Text>
                        <TextInput
                            value='TR55 0006 2000 1234 0006 1234 56'
                            style={{
                                fontSize: 16,
                                fontWeight: '400',
                                color: '#141414',
                                padding: 0,
                                margin: 0,
                            }} />
                    </View>
                </FormElement>

                <Button butonStyle={{
                    marginTop: 15
                }} title="Sorgula" />

                <Text style={{
                    marginTop: 30,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Uygulama Erişim İzinleri</Text>

                <FormElement>
                    <TextInput
                        placeholder='Kayıt Adı (Opsiyonel)'
                        placeholderTextColor={"#B8B8B8"}
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414'
                        }}
                    />
                </FormElement>

                <View style={{ flex: 1 }} />
                <Button
                    onPress={() => {
                        navigation.navigate('SavedPersons' as any)
                    }}
                    butonStyle={{
                        marginTop: 44
                    }} invert title="Bankayı Kaydet" />
                <Button
                    onPress={() => {
                        navigation.navigate('SavedPersons' as any)
                    }}
                    butonStyle={{
                        marginBottom: 44,
                        marginTop: 15
                    }} title="Bankayı Sil" />
            </View>
        </Background>
    )
}

export default NewBankAccount

const styles = StyleSheet.create({})