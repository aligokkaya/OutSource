import { Image, StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendar, faCheck, faCheckCircle, faChevronDown, faChevronLeft, faChevronRight, faFaceSmile, faIdCard, faInfoCircle, faPenFancy, faPerson, faSearch, faStopwatch, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import Background from '../SendMoney/Background';
import Switch from '../Messages/Switch';
import CustomCheckbox from '../../components/CustomChecbox';

const VerifyMembershipLastStep = () => {
    const navigation = useNavigation()
    const [idScan, setIdScan] = React.useState(false)

    if (idScan) {
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
                        backgroundColor: '#141414'
                    }} />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#141414',
                        marginTop: 30,
                        alignSelf: 'center',
                        textAlign: 'center'
                    }}>Kimlik Taraması</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#727272',
                        marginTop: 15,
                        alignSelf: 'center',
                        textAlign: 'center',
                        paddingHorizontal: 10
                    }}>Tarama işlemini başlattıktan sonra kimliğinin ön yüzünü kameraya göstermeli ve işlem başarılı mesajını gördükten sonra aynı işlemi arka yüzü için tekrarlamalısın!</Text>

                    <Button
                        butonStyle={{
                            marginTop: 30,
                            marginBottom: 15
                        }}
                        invert title="Başla" onPress={() => {
                            navigation.navigate('MembershipSuccess' as any)
                        }} />

                    <Button title="Vazgeç" onPress={() => {
                        setIdScan(false)
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
                        }}>Kimlik Doğrulama</Text>
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
                }}>Gereken izinleri verdikten sonra kimlik doğrulama işlemini gerçekleştirebilirsiniz.</Text>

                <Text style={{
                    marginTop: 20,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Uygulama Erişim İzinleri</Text>

                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Okundu Bilgisi</Text>
                    <Switch />
                </View>

                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Mikrofon erişimine izin ver</Text>
                    <Switch />
                </View>

                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>NFC Özelliği</Text>
                    <Switch />
                </View>

                <Text style={{
                    marginTop: 30,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Biyometrik Veri İzni</Text>

                <View style={{
                    alignSelf: 'stretch',
                    borderRadius: 10,
                    backgroundColor: '#CAFCF0',
                    justifyContent: 'center',
                    padding: 15,
                    marginTop: 15,
                    flexDirection: 'row',
                }}>
                    <FontAwesomeIcon icon={faInfoCircle} color="#005078" size={20} />
                    <Text style={{
                        marginLeft: 7,
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#005078'
                    }}>
                        {'Uzaktan kimlik tespitinizin yapılabilmesi için biyometrik verinizin ve kimlik bilgilerinde yer alan özel nitelikli verilerinizin işlenmesine açık rızanız olması gerekmektedir.'}
                    </Text>
                </View>

                <CustomCheckbox
                    style={{ marginTop: 20 }}
                    checkhed={false}
                    text='Kimlik tespiti amacıyla söz konusu verilerin kayıt altına alınmasına izin veriyorum.'
                />

                <Text style={{
                    marginTop: 30,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Kimlik Taraması</Text>

                <View style={{ marginTop: 5, flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <TouchableOpacity
                        onPress={() => {
                            setIdScan(true)
                        }}
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }}>

                        <FontAwesomeIcon
                            icon={faIdCard}
                            color="#727272"
                            size={20} />
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#141414',
                            marginLeft: 15
                        }}>Kimliğini Tarat</Text>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FontAwesomeIcon
                            icon={faCheckCircle} color="#48BF24" size={20} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#48BF24',
                            marginLeft: 5
                        }}>Tamamlandı</Text>
                    </View>
                </View>

                <Text style={{
                    marginTop: 30,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Yüz Taraması</Text>

                <View style={{ marginTop: 5, flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>

                        <FontAwesomeIcon
                            icon={faFaceSmile}
                            color="#3D21A2"
                            size={20} />
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#141414',
                            marginLeft: 15
                        }}>Yüzünü Tarat</Text>
                    </View>
                    <View style={{
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FontAwesomeIcon
                            icon={faChevronRight} color="#E7E7E7" size={20} />
                    </View>
                </View>

                <Button
                    invert
                    onPress={() => {
                        navigation.navigate('MembershipSuccess' as any)
                    }}
                    butonStyle={{
                        marginVertical: 45
                    }} title="Üyeliğini Doğrula" />
            </ScrollView>
        </Background>
    );
};

export default VerifyMembershipLastStep;

const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
