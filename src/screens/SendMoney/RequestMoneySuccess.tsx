import { Image, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React from 'react';
import BackgroundContainer from '../../components/BackgroundContainer';
import MainHeader from '../../components/MainHeader';
import Container from '../../components/Container';
import Option from '../../components/Option'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faCheckCircle, faChevronDown, faChevronLeft, faEdit, faInfoCircle, faPerson } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { KeyCode } from './KeyCode';
import Background from './Background';

const RequestMoneySuccess = () => {
    const navigation = useNavigation()
    const [value, setValue] = React.useState('')

    return (
        <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Talep Et'>
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
                    Tebrikler, Para Talebi Gerçekleştirildi!
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

                <Button
                    butonStyle={{ marginTop: 30, alignSelf: 'stretch' }}
                    onPress={() => {
                        navigation.navigate('SendMoneySuccess' as any)
                    }}
                    title="Gelen Talepleri Gör" />

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
                            }}>TALEP EDİLEN TUTAR</Text>
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
                    }}>Açıklama</Text>
                    <Text style={{
                        marginTop: 5,
                        fontSize: 14,
                        color: '#141414',
                        fontWeight: '400'
                    }}>-</Text>
                </View>
            </View>
        </Background>
    );
};

export default RequestMoneySuccess;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
