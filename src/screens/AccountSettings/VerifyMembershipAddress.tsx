import { Image, StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Option from '../../components/Option'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faChevronDown, faChevronLeft, faInfoCircle, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import NewDropdown from '../Deposit/NewDropdown';
import Background from '../SendMoney/Background';


const VerifyMembershipAddress = () => {
    const navigation = useNavigation()

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
                        }}>3</Text>
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
                    alignSelf: 'center'
                }}>Lütfen adresinizi girin.</Text>


                <NewDropdown
                    icon={faChevronDown}
                    data={['Türkiye', 'Azerbaycan', 'Almanya']}
                    containerStyle={{
                        zIndex: 3
                    }}
                    elementStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                    <Text
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414'
                        }}
                    >Şehir</Text>
                </NewDropdown >


                <NewDropdown
                    icon={faChevronDown}
                    data={['Türkiye', 'Azerbaycan', 'Almanya']}
                    containerStyle={{
                        zIndex: 2
                    }}
                    elementStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                    <Text
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414'
                        }}
                    >İlçe</Text>
                </NewDropdown >

                <NewDropdown
                    icon={faChevronDown}
                    data={['Türkiye', 'Azerbaycan', 'Almanya']}
                    containerStyle={{
                        zIndex: 1
                    }}
                    elementStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                    <Text
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414'
                        }}
                    >Mahalle / Köy</Text>
                </NewDropdown >

                <NewDropdown
                    icon={faChevronDown}
                    data={['İstanbul', 'Ankara', 'İzmir']}
                    elementStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                    <Text
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414'
                        }}
                    >Cadde / Sokak</Text>
                </NewDropdown >

                <View style={{ flexDirection: 'row' }}>
                    <FormElement style={{ flex: 1 }}>
                        <TextInput
                            placeholder='Kapı No'
                            placeholderTextColor={"#B8B8B8"}
                            style={{
                                flex: 1,
                                fontSize: 16,
                                color: '#141414'
                            }}
                        />
                    </FormElement>


                    <FormElement style={{ flex: 1, marginLeft: 15 }}>
                        <TextInput
                            placeholder='Daire No'
                            placeholderTextColor={"#B8B8B8"}
                            style={{
                                flex: 1,
                                fontSize: 16,
                                color: '#141414'
                            }}
                        />
                    </FormElement>
                </View>


                <FormElement>
                    <TextInput
                        placeholder='Apartman Adı (Opsiyonel)'
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
                        navigation.navigate('VerifyMembershipIdentityInformations' as any)
                    }}
                    butonStyle={{
                        marginVertical: 45
                    }} title="Değişiklikleri Kaydet" />
            </ScrollView>
        </Background>
    );
};

export default VerifyMembershipAddress;

const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
