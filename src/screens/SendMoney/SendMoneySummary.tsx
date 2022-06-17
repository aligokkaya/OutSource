import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faChevronDown, faChevronLeft, faEdit, faInfoCircle, faPerson } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';
import Background from './Background';

const SendMoneySummary = () => {
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Gönder'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                alignSelf: 'stretch',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
            }}>
                <View style={{
                    alignSelf: 'stretch',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20
                }}>

                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1.5,
                        backgroundColor: '#249ED4',
                        borderColor: '#249ED4'
                    }}>
                        <FontAwesomeIcon icon={faCheck} color="white" size={14} />
                    </View>
                    <View style={{
                        height: 3,
                        width: 15,
                        backgroundColor: '#F3F3F3',
                        marginHorizontal: 6
                    }} />
                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1.5,
                        backgroundColor: '#249ED4',
                        borderColor: '#249ED4'
                    }}>
                        <FontAwesomeIcon icon={faCheck} color="white" size={14} />
                    </View>
                    <View style={{
                        height: 3,
                        width: 15,
                        backgroundColor: '#F3F3F3',
                        marginHorizontal: 6
                    }} />
                    <View style={{
                        paddingHorizontal: 15,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        borderWidth: 1.5,
                        borderColor: '#00BED1',
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#00BED1'
                        }}>Özet</Text>
                    </View>
                </View>


                <Text style={{
                    alignSelf: 'center',
                    fontWeight: '400',
                    marginTop: 15,
                    color: '#141414'
                }}>
                    Bilgilerini onaylamanız halinde para gönderilecektir.
                </Text>

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

                <View style={{ flex: 1 }} />
                <Button
                    invert
                    onPress={() => {
                        navigation.navigate('SendMoneySuccess' as any)
                    }}
                    butonStyle={{
                        alignSelf: 'stretch',
                    }} title="Para Gönder" />
                <Button
                    onPress={() => {
                    }}
                    butonStyle={{
                        alignSelf: 'stretch',
                        marginTop: 15,
                        marginBottom: 45
                    }} title="Vazgeç" />
            </View>
        </Background>
    );
};

export default SendMoneySummary;

const styles = StyleSheet.create({
    title: { zIndex : -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
