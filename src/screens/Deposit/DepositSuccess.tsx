import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckCircle, faChevronLeft, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';
import Background from '../SendMoney/Background';

const DepositSuccess = () => {
    const navigation = useNavigation()
    const [value, setValue] = React.useState('')

    return (
        <Background title='Para Yatır'>
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
                    Tebrikler, Para Yatırma İşlemi Gerçekleştirildi!
                </Text>

                <Text style={{
                    alignSelf: 'center',
                    fontWeight: '400',
                    marginTop: 15,
                    textAlign: 'center',
                    color: '#141414'
                }}>
                    {'Bu işlem 24 saat sürebilir. 24 saat içinde belirlenen\ntutar gönderilmediği takdirde işlem iptal edilecektir.'}
                </Text>

                <View style={{
                    borderRadius: 10,
                    alignSelf: 'stretch',
                    borderColor: '#DED2FA',
                    borderWidth: 1,
                    marginTop: 25,
                    padding: 15
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: '#141414'
                        }}>İşlem Bilgileri</Text>
                    </View>

                    <Text style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#727272',
                        marginTop: 15,
                    }}>PARANIN ÇEKİDİĞİ HESAP</Text>

                    <View style={{
                        marginTop: 5
                    }}>

                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                        }}>
                            <View>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#141414',
                                    fontWeight: '500'
                                }}>
                                    Garanti BBVA
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#141414',
                                    marginTop: 5
                                }}>TR55 0006 2000 1234 0006 1234 56</Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#141414',
                                    marginTop: 6
                                }}>239-6625123 Güzelyalı</Text>
                            </View>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 5
                                }}
                                source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLTfBJPk71bq3zo5sWfIkcQwZF4-KfjwmZViE7tDOgM=s900-c-k-c0x00ffffff-no-rj', }}
                            />
                        </View>
                    </View>
                    <View style={{
                        marginTop: 20,
                        alignSelf: 'stretch',
                        alignItems: 'flex-start'
                    }}>
                        <Text style={{
                            fontSize: 11,
                            fontWeight: '500',
                            color: '#727272'
                        }}>PARANIN YATIRILACAĞI HESAP</Text>
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
                    <View style={{
                        marginTop: 20,
                        alignSelf: 'stretch',
                        alignItems: 'flex-start'
                    }}>
                        <Text style={{
                            fontSize: 11,
                            fontWeight: '500',
                            color: '#727272'
                        }}>YATIRILAN TUTAR</Text>
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
                            }}>₺500</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1 }} />

                <Button
                    invert
                    butonStyle={{ marginVertical: 45, alignSelf: 'stretch' }}
                    onPress={() => {
                        navigation.navigate('DepositSelectBank' as any)
                    }}
                    title="Transferlere Dön" />
            </View>
        </Background>
    );
};

export default DepositSuccess;

const styles = StyleSheet.create({
    title: { zIndex : -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
