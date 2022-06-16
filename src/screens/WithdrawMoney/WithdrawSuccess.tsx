import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckCircle, faChevronLeft, faCircleCheck, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';
import Background from '../SendMoney/Background';

const WithdrawSuccess = () => {
    const navigation = useNavigation()
    const [value, setValue] = React.useState('')

    return (
        <Background title='Para Çek'>
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
                    Tebrikler, Para Çekim İşlemi Gerçekleştirildi!
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
                        navigation.navigate('QRTransactions' as any)
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
                            fontWeight: '500',
                            color: '#141414'
                        }}>İşlem Bilgileri</Text>
                    </View>

                    <Text style={{
                        marginTop: 20,
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#727272'
                    }}>PARANIN GİDECEĞİ HESAP</Text>
                    <Text style={{
                        marginTop: 5,
                        fontSize: 14,
                        color: '#141414',
                        fontWeight: '400'
                    }}>{'TR55 0006 2000 1234 0006 1234 56\n(Cansu Ural)'}</Text>
                    <Text style={{
                        marginTop: 20,
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#727272'
                    }}>KAYID ADI</Text>
                    <Text style={{
                        marginTop: 5,
                        fontSize: 14,
                        color: '#141414',
                        fontWeight: '400'
                    }}>CANSU ING HESABI</Text>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        marginTop: 5,
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#141414',
                            fontWeight: '500',
                            marginRight: 5
                        }}>Hesap Kaydedildi!</Text>
                        <FontAwesomeIcon icon={faCircleCheck} color="#46C01F" size={14} />
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
                            }}>ÇEKİLEN TUTAR</Text>
                            <Text style={{
                                marginTop: 5,
                                fontSize: 14,
                                color: '#141414',
                                fontWeight: '400'
                            }}>₺500,00</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '500',
                                color: '#727272'
                            }}>İŞLEM ÜCRETİ</Text>
                            <Text style={{
                                marginTop: 5,
                                fontSize: 14,
                                color: '#141414',
                                fontWeight: '400'
                            }}>₺2,49</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Background>
    );
};

export default WithdrawSuccess;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
