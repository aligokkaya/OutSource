import { Image, StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Option from '../../components/Option'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faChevronDown, faChevronLeft, faChevronRight, faEdit, faInfoCircle, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import Background from '../SendMoney/Background';
import DoubleButtonContainer from '../../components/DoubleButtonContainer';

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

const DepositSummary = () => {
    const navigation = useNavigation()
    const [selectedMenu, setSelectedMenu] = useState(0)

    return (
        <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Yatır'>
            <ScrollView style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <DoubleButtonContainer
                    style={{ marginTop: 30 }}
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    option1Text={'HAVALE / EFT ile'}
                    option2Text={'Kart ile'}
                />

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
                        }}>Özet</Text>
                    </View>
                </View>

                <Text style={{
                    marginVertical: 30,
                    textAlign: 'center',
                    fontSize: 14,
                    color: '#141414',
                    fontWeight: '400'
                }}>{'Bilgileri onaylamanız halinde para yatırma talebiniz\nişleme alınacaktır.'}</Text>

                <View style={{
                    borderRadius: 10,
                    alignSelf: 'stretch',
                    borderColor: '#DED2FA',
                    borderWidth: 1,
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

                    {
                        selectedMenu === 0 ? (
                            <>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: '500',
                                    color: '#727272',
                                    marginTop: 15,
                                }}>PARANIN ÇEKİLECEĞİ HESAP</Text>

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
                            </>
                        ) : (
                            <>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: '500',
                                    color: '#727272',
                                    marginTop: 15,
                                }}>PARANIN ÇEKİLECEĞİ KART</Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '500',
                                    color: '#141414',
                                    marginTop: 5,
                                }}>5213 1234 5678 3060</Text>
                                <View style={{
                                    marginTop: 5,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingRight: 20
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: '500',
                                        color: '#141414',
                                    }}>Cansu Ural</Text>

                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: '500',
                                        color: '#141414',
                                    }}>09/26</Text>

                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: '500',
                                        color: '#141414',
                                    }}>CVV: 467</Text>
                                </View>
                            </>
                        )
                    }

                    <View style={{
                        marginTop: 20,
                        alignSelf: 'stretch',
                        alignItems: 'flex-start'
                    }}>
                        <Text style={{
                            fontSize: 11,
                            fontWeight: '500',
                            color: '#727272'
                        }}>PARA YATIRILACAK HESAP</Text>
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

                <View style={{
                    alignSelf: 'stretch',
                    borderRadius: 10,
                    backgroundColor: '#CAFCF0',
                    padding: 15,
                    marginTop: 25,
                    marginBottom: 30,
                    flexDirection: 'row',
                }}>
                    <FontAwesomeIcon icon={faInfoCircle} color="#005078" size={20} />
                    <View style={{
                        marginLeft: 7,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#005078'
                        }}>
                            Önemli Bilgilendirme!
                        </Text>
                        <Text style={{
                            marginTop: 5,
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#005078'
                        }}>
                            {
                                selectedMenu === 0 ? (
                                    'Bu isim Transfer ekranındaki Hızlı İşlem listesinde\ngösterilecek olan isimdir.'
                                ) : (
                                    '24 saat içinde belirlenen tutar gönderilmediği\ntakdirde işlem iptal edilecektir.'
                                )
                            }
                        </Text>
                    </View>
                </View>
                <Button
                    invert
                    onPress={() => {
                        navigation.navigate('DepositSuccess' as any)
                    }} title="Para Yatırma Talebini Onayla" />
                <Button
                    butonStyle={{
                        marginTop: 15,
                        marginBottom: 45
                    }} title="Vazgeç" />
            </ScrollView>
        </Background>
    );
};

export default DepositSummary;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});
