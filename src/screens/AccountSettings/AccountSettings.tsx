import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Switch from '../Messages/Switch'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

const AccountSettings = () => {
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} title='Hesap Ayarları'>
            <ScrollView style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                paddingTop: 20
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Ana Hesap Seçimi</Text>

                <View style={{
                    borderRadius: 10,
                    alignSelf: 'stretch',
                    borderColor: '#DED2FA',
                    borderWidth: 1,
                    paddingTop: 10,
                    marginTop: 15,
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <View>
                            <Text style={{
                                fontSize: 11,
                                fontWeight: '500',
                                color: '#727272'
                            }}>ANA HESAP SEÇİMİ</Text>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 6,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    color: '#141414',
                                }}>Ana Hesabım</Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#727272',
                                    marginLeft: 5
                                }}>
                                    PNR: 12345678
                                </Text>
                            </View>
                        </View>
                        <FontAwesomeIcon icon={faChevronRight} color="#3D21A2" size={22} />
                    </View>

                    <View style={{
                        backgroundColor: '#FAF6FE',
                        paddingHorizontal: 10,
                        paddingBottom: 10,
                        marginTop: 20,
                        marginBottom: 1,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}>
                        <Text style={{
                            marginTop: 10,
                            fontSize: 14,
                            color: '#141414',
                            fontWeight: '400'
                        }}>
                            Limit: ₺950,00
                        </Text>
                    </View>
                </View>

                <Text style={{
                    marginTop: 30,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Hesap Terchileri</Text>

                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Para gönderiminde direkt ana hesabımı kullan</Text>
                    <Switch />
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Para gönderiminde direkt ana hesabımı kullan</Text>
                    <Switch />
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Para gönderiminde direkt ana hesabımı kullan</Text>
                    <Switch on={false} />
                </View>
                <Button
                    onPress={() => {
                        navigation.navigate('CardSettings' as any)
                    }}
                    butonStyle={{
                        marginTop: 44,
                    }}
                    invert title="Değişiklikleri Kaydet" />
                <Button
                    butonStyle={{
                        marginBottom: 44,
                        marginTop: 15
                    }}
                    title="Vazgeç" />
            </ScrollView>

        </Background>
    )
}

export default AccountSettings

const styles = StyleSheet.create({})