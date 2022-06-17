import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckCircle, faChevronLeft, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';
import Background from './Background';

const SendMoneySuccess = () => {
    const navigation = useNavigation()
    const [value, setValue] = React.useState('')

    return (
        <Background title='Para Gönder'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                alignSelf: 'stretch',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
            }}>

                <FontAwesomeIcon icon={faCheckCircle} color="#46C01F" size={58} style={{
                    marginTop: 25,
                    alignSelf: 'center'
                }} />


                <Text style={{
                    alignSelf: 'center',
                    fontWeight: '500',
                    marginTop: 20,
                    fontSize: 20,
                    textAlign: 'center',
                    color: '#141414'
                }}>
                    Tebrikler, Para Gönderimi Gerçekleştirildi!
                </Text>

                <Text style={{
                    alignSelf: 'center',
                    fontWeight: '400',
                    marginTop: 15,
                    textAlign: 'center',
                    color: '#141414'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Text>


                <Button
                    invert
                    butonStyle={{ marginTop: 30, alignSelf: 'stretch' }}
                    onPress={() => {
                        navigation.navigate('SendMoneySuccess' as any)
                    }}
                    title="Transferlere Dön" />

                <View style={{
                    borderColor: '#E7E7E7',
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 15,
                    marginTop: 25
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: '#141414'
                        }}>İşlem Bilgileri</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <FontAwesomeIcon icon={faEdit} color="#3A1BA3" size={20} />
                            <Text style={{
                                marginLeft: 5,
                                fontSize: 14,
                                fontWeight: '500',
                                color: '#3A1BA3'
                            }}>Düzenle</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 15
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '500',
                                color: '#727272'
                            }}>PARA GÖNDERİLECEK KİŞİ</Text>
                            <Text style={{
                                marginTop: 5,
                                fontSize: 14,
                                color: '#141414',
                                fontWeight: '400'
                            }}>Gü**** Ze**** Öz*****</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '500',
                                color: '#727272'
                            }}>YATIRILACAK TUTAR</Text>
                            <Text style={{
                                marginTop: 5,
                                fontSize: 14,
                                color: '#141414',
                                fontWeight: '400'
                            }}>₺500,00</Text>
                        </View>
                    </View>
                    <Text style={{
                        marginTop: 20,
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#727272'
                    }}>AÇIKLAMA</Text>
                    <Text style={{
                        marginTop: 5,
                        fontSize: 14,
                        color: '#141414',
                        fontWeight: '400'
                    }}>Konser bileti için teşekkürler!</Text>
                    <Text style={{
                        marginTop: 20,
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#727272'
                    }}>HIZLI İŞLEM İSMİ</Text>
                    <Text style={{
                        marginTop: 5,
                        fontSize: 14,
                        color: '#141414',
                        fontWeight: '400'
                    }}>Gülay’a Para Gönder</Text>
                </View>
            </View>
        </Background>
    );
};

export default SendMoneySuccess;

const styles = StyleSheet.create({
    title: { zIndex : -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
