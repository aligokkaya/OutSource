import { Image, StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Option from '../../components/Option'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronLeft, faInfoCircle, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import NewDropdown from '../Deposit/NewDropdown';
import Background from '../SendMoney/Background';


const VerifyMembership = () => {
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
                        }}>İşlem Bilgiler</Text>
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
                }}>Aşağıdaki bilgileri eksiksiz doldurun.</Text>

                <NewDropdown
                    icon={faChevronDown}
                    data={['Tip 1', 'Tip 2']}
                    containerStyle={{
                        zIndex: 2
                    }}
                    elementStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                    childrenStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}
                >
                    <View style={{
                        flex: 1,
                        transform: [{
                            translateY: 1.5
                        }]
                    }}>
                        <Text style={{
                            color: '#3D21A2',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>Kimlik Tipi</Text>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '400',
                                color: '#141414',
                                padding: 0,
                                margin: 0,
                            }}
                        >Yeni Kimlik Kartı</Text>
                    </View>
                </NewDropdown >

                <FormElement icon={faInfoCircle}>
                    <TextInput
                        placeholder='Kimlik Kartı Seri No'
                        placeholderTextColor={"#B8B8B8"}
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414'
                        }}
                    />
                </FormElement>

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
                    >Doğduğun Ülke</Text>
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
                    >Doğduğun Şehir</Text>
                </NewDropdown >

                <FormElement>
                    <TextInput
                        placeholder='Meslek'
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
                        placeholder='Anne Adı'
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
                        placeholder='Baba Adı'
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
                        navigation.navigate('VerifyMembershipAddress' as any)
                    }}
                    butonStyle={{
                        marginVertical: 45
                    }} title="Değişiklikleri Kaydet" />
            </ScrollView>
        </Background>
    );
};

export default VerifyMembership;

const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
