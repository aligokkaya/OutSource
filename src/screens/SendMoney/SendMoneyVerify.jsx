import { Image, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React from 'react';
import BackgroundContainer from '../../components/BackgroundContainer';
import MainHeader from '../../components/MainHeader';
import Container from '../../components/Container';
import Option from '../../components/Option'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faChevronDown, faChevronLeft, faInfoCircle, faPerson } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { KeyCode } from './KeyCode';
import Background from './Background';

const SendMoneyVerify = () => {
    const navigation = useNavigation()
    const [value, setValue] = React.useState('')

    return (
        <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Gönder'>
            <ScrollView style={{
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
                        }}>SMS Doğrulama</Text>
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
                </View>

                <View style={{
                    marginTop: 25,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <CircularProgress
                            value={20}
                            radius={15}
                            activeStrokeWidth={4}
                            inActiveStrokeWidth={4}
                            activeStrokeColor={'#00BED1'}
                            inActiveStrokeColor={'#E8E8E8'}
                            progressValueColor={'transparent'}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{
                                color: '#141414',
                                fontSize: 14.5
                            }}>Kalan süre</Text>
                            <Text style={{
                                color: '#141414',
                                fontSize: 15,
                                fontWeight: '700'
                            }}>182 saniye</Text>
                        </View>
                    </View>
                    <Text style={{
                        fontSize: 17,
                        color: '#B9B9B9',
                        fontWeight: '700'
                    }}>Tekrar Gönder</Text>
                </View>

                <Text style={{
                    marginTop: 25,
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 17,
                    color: '#141414'
                }}>0 (530) 123 45 67</Text>
                <Text style={{
                    alignSelf: 'center',
                    fontWeight: '500',
                    marginTop: 15,
                    color: '#141414'
                }}>
                    numaralı telefonunuza gelen SMS kodunu giriniz.
                </Text>

                <View style={{
                    alignSelf: 'center',
                    marginTop: 25
                }}>
                    <KeyCode
                        onChange={setValue}
                        length={6}
                        autoFocus
                        numeric
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'stretch'
                }}>
                    <Button
                        onPress={() => {
                        }}
                        butonStyle={{
                            flex: 1,
                            marginVertical: 45
                        }} title="Vazgeç" />
                    <Button
                        invert
                        onPress={() => {
                            navigation.navigate('SendMoneySummary')
                        }}
                        butonStyle={{
                            flex: 1,
                            marginLeft: 15,
                            marginVertical: 45
                        }} title="Kodu Doğrula" />
                </View>
            </ScrollView>
        </Background>
    );
};

export default SendMoneyVerify;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
