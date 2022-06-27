import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faChevronRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Switch from '../Messages/Switch'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import MyCards from '../../components/MyCards'

const LegalLimits = () => {
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} title='Yasal Limitler'>
            <ScrollView style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <Text style={{
                    marginTop: 20,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Aktif Üyelik Tipi</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#141414'
                    }}>Gizlilik</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#48BF24'
                    }}>Aktif</Text>
                </View>

                <View style={{
                    alignSelf: 'stretch',
                    borderRadius: 10,
                    backgroundColor: '#CAFCF0',
                    justifyContent: 'center',
                    padding: 15,
                    marginTop: 20,
                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <FontAwesomeIcon icon={faInfoCircle} color="#005078" size={20} />
                        <View style={{
                            marginLeft: 7,
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '500',
                                color: '#004F79'
                            }}>
                                Üyelik Doğrulaması Gerekli
                            </Text>
                            <Text style={{
                                marginTop: 10,
                                marginBottom: 15,
                                fontSize: 12,
                                fontWeight: '400',
                                color: '#005078'
                            }}>
                                {
                                    'Üyelik doğrulamasını gerçekleştirdiğinde Onaylı Hesap\'a yükselip para transferi veya kart başvurusu gibi işlemleri gerçekleştirebilieceksin. '
                                }
                            </Text>
                        </View>
                    </View>

                    <Button
                        onPress={() => {
                            navigation.navigate('VerifyMembership' as any)
                        }}
                        butonStyle={{
                            backgroundColor: '#005078'
                        }}
                        textStyle={{
                            color: '#FFFFFF',
                        }}
                        title="Üyeliğini Doğrula" />
                </View>

                <Text style={{
                    marginTop: 20,
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#141414'
                }}>Limitler</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: 12,
                            color: '#727272',
                            fontWeight: '500'
                        }}>PARA GÖNDERME LİMİTİ</Text>
                        <Text style={{
                            marginTop: 5,
                            fontSize: 14,
                            color: '#121212',
                            fontWeight: '400'
                        }}>₺00,00</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: 12,
                            color: '#727272',
                            fontWeight: '500'
                        }}>PARA YATIRMA/GELEN PARA</Text>
                        <Text style={{
                            marginTop: 5,
                            fontSize: 14,
                            color: '#121212',
                            fontWeight: '400'
                        }}>₺00,00</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: 12,
                            color: '#727272',
                            fontWeight: '500'
                        }}>PARA ÇEKME</Text>
                        <Text style={{
                            marginTop: 5,
                            fontSize: 14,
                            color: '#121212',
                            fontWeight: '400'
                        }}>₺00,00</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: 12,
                            color: '#727272',
                            fontWeight: '500'
                        }}>HARCAMA LİMİTİ</Text>
                        <Text style={{
                            marginTop: 5,
                            fontSize: 14,
                            color: '#121212',
                            fontWeight: '400'
                        }}>₺00,00</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', marginTop: 30 }}>
                    <Text style={{
                        fontSize: 12,
                        color: '#727272',
                        fontWeight: '500'
                    }}>MAKSİMUM BAKİYE</Text>
                    <Text style={{
                        marginTop: 5,
                        fontSize: 14,
                        color: '#121212',
                        fontWeight: '400'
                    }}>₺00,00</Text>
                </View>
            </ScrollView>
        </Background>
    )
}

export default LegalLimits

const styles = StyleSheet.create({})