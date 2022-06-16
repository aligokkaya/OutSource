import { Image, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronLeft, faInfoCircle, faPerson } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import Background from '../SendMoney/Background';

const QRScanned = () => {
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='QR ile Para Gönder'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
            }}>

                <Text style={styles.title}>Para Gönderilecek Kişi</Text>
                <View style={{
                    marginTop: 25,
                    backgroundColor: '#FAF6FE',
                    height: 32,
                    alignSelf: 'flex-start',
                    borderRadius: 32,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image
                        source={{ uri: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj' }}
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 32,
                        }} />
                    <Text style={{
                        fontSize: 14,
                        marginHorizontal: 10,
                        color: '#141414',
                        fontWeight: '500'
                    }}>{'Cansu Ural'}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 30
                }}>
                    <Text style={[styles.title, { marginTop: null as any }]}>Tutar Bilgileri</Text>
                    <View style={{
                        backgroundColor: '#E8FBD2',
                        height: 25,
                        borderRadius: 5,
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: '#086100',
                            fontSize: 12,
                            fontWeight: '400'
                        }}>Toplam Limit: 1.500 TL</Text>
                    </View>
                </View>


                <FormElement style={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: 16,
                            color: '#141414',
                            fontWeight: '400'
                        }}>TRY</Text>

                        <FontAwesomeIcon icon={faChevronDown} color="#3D21A2" size={15} style={{
                            marginLeft: 8
                        }} />

                        <View style={{ width: 1, height: 30, backgroundColor: '#E7E7E7', marginHorizontal: 15 }} />
                    </View>
                    <View style={{
                        transform: [{
                            translateY: 4
                        }]
                    }}>
                        <Text style={{
                            color: '#3D21A2',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>Tutar</Text>
                        <TextInput
                            style={{
                                fontSize: 17,
                                lineHeight: 17,
                                fontWeight: '500',
                                color: '#141414',
                                padding: 0,
                                margin: 0
                            }}
                            value='890.00'
                        />
                    </View>
                </FormElement>

                <Text style={styles.title}>Açıklama</Text>

                <FormElement>
                    <>
                        <TextInput
                            placeholder='Metin Girin (Opsiyonel)'
                            placeholderTextColor={"#B8B8B8"}
                            style={{
                                flex: 1,
                                fontSize: 16,
                                color: '#141414'
                            }}
                        />
                        <Text style={{
                            fontSize: 14,
                            color: '#727272'
                        }}>0/52</Text>
                    </>
                </FormElement>

                <View style={{ flex: 1 }} />
                <Button
                    invert
                    onPress={() => {
                        navigation.navigate('QRRequestMoney' as any)
                    }}
                    butonStyle={{
                        marginVertical: 45
                    }} title="Gönder" />
            </View>
        </Background>
    );
};

export default QRScanned;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
