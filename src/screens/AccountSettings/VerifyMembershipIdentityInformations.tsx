import { Image, StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendar, faCheck, faCheckCircle, faChevronDown, faChevronLeft, faInfoCircle, faPenFancy, faPerson, faSearch, faStopwatch, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import Background from '../SendMoney/Background';


const VerifyMembershipIdentityInformations = () => {
    const navigation = useNavigation()
    const [nfcScan, setNfcScan] = React.useState(false)
    const [nfcFail, setNfcFail] = React.useState(false)

    if (nfcFail) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#666666',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    width: Dimensions.get('window').width * 0.85,
                    backgroundColor: 'white',
                    padding: 15,
                    paddingTop: 0,
                    borderRadius: 15
                }}>

                    <View style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        width: 70,
                        height: 70,
                        borderRadius: 70,
                        backgroundColor: 'white',
                        transform: [{
                            translateY: -35
                        }],
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FontAwesomeIcon icon={faXmarkCircle} color="#D63333" size={58} />
                    </View>

                    <Text style={{
                        marginTop: 50,
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#141414',
                        alignSelf: 'center',
                        textAlign: 'center'
                    }}>Tarama Gerçekleştirilemedi!</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#727272',
                        marginTop: 15,
                        alignSelf: 'center',
                        textAlign: 'center',
                        paddingHorizontal: 10,
                    }}>Kimlik kartınızı telefonunuzun NFC okuyucu bölgesine yaklaştırıp tarama tamamlanana kadar bekleyiniz.</Text>

                    <Button
                        butonStyle={{
                            marginTop: 30,
                            marginBottom: 15
                        }}
                        invert title="Tekrar Dene" onPress={() => {
                            setNfcScan(true)
                            setNfcFail(false)
                        }} />

                    <Button title="Vazgeç" onPress={() => {
                        setNfcFail(false)
                        setNfcScan(false)
                    }} />
                </View>
            </View>
        )
    }

    if (nfcScan) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#666666',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    width: Dimensions.get('window').width * 0.85,
                    backgroundColor: 'white',
                    padding: 15,
                    borderRadius: 15
                }}>
                    <View style={{
                        height: 165,
                        alignSelf: 'stretch',
                        borderRadius: 10,
                        backgroundColor: '#E7E7E7'
                    }} />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#141414',
                        marginTop: 15,
                        alignSelf: 'center',
                        textAlign: 'center'
                    }}>NFC Taraması</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#727272',
                        marginTop: 15,
                        alignSelf: 'center',
                        textAlign: 'center',
                        paddingHorizontal: 10
                    }}>Kimlik kartınızı telefonunuzun NFC okuyucu bölgesine yaklaştırıp tarama tamamlanana kadar bekleyiniz.</Text>

                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#727272',
                        marginTop: 15,
                        alignSelf: 'center',
                        textAlign: 'center',
                        paddingHorizontal: 10
                    }}>Telefon kılıfınız var ise çıkarmanız tavsiye edilir.</Text>

                    <View style={{
                        marginTop: 25,
                        marginBottom: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}>
                        <FontAwesomeIcon icon={faStopwatch} color="#3D21A2" size={20} />
                        <Text style={{
                            marginLeft: 10,
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#3D21A2',
                        }}>Taramanın başlaması bekleniyor!</Text>

                    </View>

                    <Button title="Vazgeç" onPress={() => {
                        setNfcFail(true)
                        setNfcScan(false)
                    }} />
                </View>
            </View>
        )
    }

    return (
        <Background leftIcon={faChevronLeft} title='Üyeliğini Doğrula'>
            <ScrollView style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <View style={{
                    alignSelf: 'stretch',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 34
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
                        }}>Adres Bilgileri</Text>
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
                        backgroundColor: '#F3F3F3',
                        borderColor: '#F3F3F3'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#C8C8C8',
                        }}>4</Text>
                    </View>
                </View>

                <Text style={{
                    marginVertical: 30,
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#141414',
                    alignSelf: 'center',
                    textAlign: 'center',
                    paddingHorizontal: 20
                }}>Lütfen bilgilerin kimliğinizde yazdığı gibi olduğundan emin olun.</Text>

                <Button
                    onPress={() => {
                        setNfcScan(true)
                    }}
                    icon={faPenFancy} iconProperty={{ color: '#3D21A2', size: 18 }} title='NFC ile Doldur' />
                <Button
                    butonStyle={{
                        marginTop: 15,
                        backgroundColor: '#CCF8A7'
                    }}
                    icon={faCheckCircle}
                    iconProperty={{ color: '#48BF24', size: 18 }}
                    title='NFC Taraması Tamamlandı!'
                    textStyle={{
                        color: '#48BF24'
                    }}
                />

                <FormElement>
                    <TextInput
                        placeholder='Ad'
                        placeholderTextColor={"#B8B8B8"}
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414'
                        }}
                    />
                </FormElement>
                <FormElement>
                    <TextInput
                        placeholder='Soyad'
                        placeholderTextColor={"#B8B8B8"}
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414'
                        }}
                    />
                </FormElement>
                <FormElement>
                    <TextInput
                        placeholder='TC Kimlik No'
                        placeholderTextColor={"#B8B8B8"}
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414'
                        }}
                    />
                </FormElement>
                <FormElement icon={faCalendar}>
                    <TextInput
                        placeholder='Doğum Tarihi'
                        placeholderTextColor={"#B8B8B8"}
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414'
                        }}
                    />
                </FormElement>

                <Button
                    invert
                    onPress={() => {
                        navigation.navigate('VerifyMembershipLastStep' as any)
                    }}
                    butonStyle={{
                        marginVertical: 45
                    }} title="Değişiklikleri Kaydet" />
            </ScrollView>
        </Background>
    );
};

export default VerifyMembershipIdentityInformations;

const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
