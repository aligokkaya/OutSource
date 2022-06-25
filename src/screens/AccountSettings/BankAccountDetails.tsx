import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronDown, faChevronLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button'
import FormElement from '../../components/FormElement'
import NewDropdown from '../Deposit/NewDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const BankAccountDetails = () => {
    return (
        <Background leftIcon={faChevronLeft} title='Banka Hesabı Detayları'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                padding: 15
            }}>

                <NewDropdown
                    icon={faChevronDown}
                    iconStyle={{
                        color: '#727272'
                    }}
                    data={['Tip 1', 'Tip 2']}
                    containerStyle={{
                        zIndex: 2,
                    }}
                    elementStyle={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: '#F3F3F3',
                        borderColor: '#F3F3F3'
                    }}
                    childrenStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}
                >
                    <View style={{
                        flex: 1,
                        transform: [{
                            translateY: 1.5
                        }]
                    }}>
                        <Text style={{
                            color: '#727272',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>Banka</Text>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '400',
                                color: '#727272',
                                padding: 0,
                                margin: 0,
                            }}
                        >Garanti BBVA</Text>
                    </View>

                </NewDropdown>

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

                <FormElement
                    style={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        backgroundColor: '#FAF6FE',
                        borderColor: '#FAF6FE'
                    }}>
                    <FontAwesomeIcon icon={faCircleCheck} color="#48BF24" size={21.5} />

                    <Text style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginLeft: 10
                    }}>239-6625123 Güzelyalı</Text>
                </FormElement>

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
                <Button butonStyle={{
                    marginTop: 44
                }} invert title="Değişiklikleri Kaydet" />
                <Button butonStyle={{
                    marginBottom: 44,
                    marginTop: 15
                }} title="Bankayı Sil" />
            </View>
        </Background>
    )
}

export default BankAccountDetails

const styles = StyleSheet.create({})