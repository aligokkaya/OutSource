import { Image, StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Option from '../../components/Option'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronLeft, faInfoCircle, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import Background from '../SendMoney/Background';
import NewDropdown from '../Deposit/NewDropdown';

const persons = [
    {
        image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj',
        name: 'İlknur Yaman'
    }, {
        image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj',
        name: 'Hakan Aktaş'
    }, {
        image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj',
        name: 'Hakan Demir'
    }
]

const FastTransaction = () => {
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Gönder'>
            <ScrollView style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <Text style={styles.title}>Gerçekleştirilecek İşlem</Text>
                <FormElement style={{
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{
                            color: '#3D21A2',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>Transfer Tipi Seç</Text>
                        <Text
                            style={{
                                fontSize: 16,
                                lineHeight: 16,
                                fontWeight: '400',
                                color: '#141414',
                                padding: 0,
                                margin: 0,
                                marginTop: 4
                            }}
                        >{'Para Gönder'}</Text>
                    </View>
                    <FontAwesomeIcon icon={faChevronDown} color="#3A1BA3" size={15} />
                </FormElement>
                <Text style={styles.title}>Kayıtlı Kişilerim</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                        alignSelf: 'stretch',
                        marginTop: 25,
                        flexGrow: 0
                    }}>
                    <View style={{
                        width: 32,
                        height: 32,
                        borderRadius: 32,
                        backgroundColor: '#FAF6FE',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FontAwesomeIcon icon={faSearch} color="#3A1BA3" size={15} />
                    </View>
                    {
                        persons.map((item, index) => (
                            <View style={{
                                backgroundColor: '#FAF6FE',
                                height: 32,
                                borderRadius: 32,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 15
                            }}>
                                <Image
                                    source={{ uri: item.image }}
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
                                }}>{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>

                <Text style={styles.title}>Kayıtlı Olmayan Gönderici</Text>

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
                        }}>Telefon Numarası</Text>
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


                <Button butonStyle={{
                    marginTop: 20
                }} title="Sorgula" />


                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 30
                }}>
                    <Text style={[styles.title, { marginTop: null as any }]}>Tutar Bilgisi</Text>
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

                <View style={{
                    alignSelf: 'stretch',
                    borderRadius: 10,
                    backgroundColor: '#CAFCF0',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 15,
                    marginTop: 25,
                    flexDirection: 'row',
                }}>
                    <FontAwesomeIcon icon={faInfoCircle} color="#005078" size={20} />
                    <Text style={{
                        marginLeft: 7,
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#005078'
                    }}>Bu isim Transfer ekranındaki Hızlı İşlem listesinde gösterilecek olan isimdir.</Text>
                </View>

                <FormElement>
                    <TextInput
                        placeholder='Hızlı İşlem İsmi (Örn: Anneme para gönder)'
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
                        navigation.navigate('SendMoneySelected' as any)
                    }}
                    butonStyle={{
                        marginTop: 30
                    }} title="Hızlı İişlem Oluştur" />
                <Button
                    butonStyle={{
                        marginTop: 15,
                        marginBottom: 45
                    }} title="Vazgeç" />
            </ScrollView>
        </Background>
    );
};

export default FastTransaction;

const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
