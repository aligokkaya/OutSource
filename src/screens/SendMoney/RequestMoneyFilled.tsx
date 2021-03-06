import { Image, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import BackgroundContainer from '../../components/BackgroundContainer';
import MainHeader from '../../components/MainHeader';
import Container from '../../components/Container';
import Option from '../../components/Option'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckCircle, faChevronDown, faChevronLeft, faCircleXmark, faClose, faInfoCircle, faPerson } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import Background from './Background';
import NewDropdown from '../Deposit/NewDropdown';

const RequestMoneyFilled = () => {
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Talep Et'>
            <ScrollView style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
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
                        }}>????lem Bilgiler</Text>
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
                        }}>2</Text>
                    </View>
                </View>

                <Text style={styles.title}>Kay??tl?? Olmayan Kullan??c??</Text>


                <View style={{
                    flexDirection: 'row'
                }}>
                    <NewDropdown data={['+90', '+1', '+77']}>
                        <>
                            <Image
                                source={{ uri: '' }}
                                style={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: 28,
                                    backgroundColor: 'red'
                                }} />
                            <Text style={{
                                marginLeft: 5,
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: '#141414'
                            }}>+90</Text>

                            <FontAwesomeIcon icon={faChevronDown} color="#3D21A2" size={15} style={{
                                marginLeft: 8
                            }} />
                        </>
                    </NewDropdown>

                    <FormElement style={{
                        marginLeft: 15, flex: 1, flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        paddingTop: 5
                    }}>
                        <Text style={{
                            color: '#3D21A2',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>Telefon Numaras??</Text>
                        <TextInput
                            style={{
                                fontSize: 17,
                                lineHeight: 17,
                                fontWeight: '500',
                                color: '#141414',
                                padding: 0,
                                margin: 0
                            }}
                            value='(5__) ___ __ __'
                        />
                    </FormElement>
                </View>

                <FormElement style={{
                    backgroundColor: '#FAF6FE',
                    borderColor: '#FAF6FE'
                }}>
                    <FontAwesomeIcon icon={faCheckCircle} color="#46C01F" size={24} />
                    <Text style={{
                        flex: 1,
                        marginHorizontal: 12,
                        fontSize: 17,
                        fontWeight: '500',
                        color: '#141414'
                    }}>G??***** Ze***** ??z*****</Text>
                    <FontAwesomeIcon icon={faCircleXmark} color="#3D21A2" size={20} />
                </FormElement>

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


                <NewDropdown data={['TRY', 'USD', 'EUR']} elementStyle={{
                    flex: 1, alignItems: 'center', justifyContent: 'flex-start'
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
                </NewDropdown>

                <Text style={styles.title}>A????klama</Text>

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

                <CustomCheckbox
                    checkhed
                    style={{ marginTop: 30 }}
                    text='Bu transferi h??zl?? i??lemlere kaydet.'
                />

                <FormElement>
                    <TextInput
                        placeholder='H??zl?? ????lem ??smi (??rn:Anneme para g??nder)'
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
                        navigation.navigate('RequestMoneySummary' as any)
                    }}
                    butonStyle={{
                        marginVertical: 45
                    }} title="Talep Et" />
            </ScrollView >
        </Background>
    );
};

export default RequestMoneyFilled;

const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
