import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faCheckCircle, faChevronLeft, faChevronRight, faCircleXmark, faMessage, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import LinearGradient from 'react-native-linear-gradient';


const PayShareBill = () => {
    const navigation = useNavigation()

    const createNewGroupChat = () => {
        navigation.navigate('CreateNewGroupChat' as any)
    }


    return (
        <Background leftIcon={faChevronLeft} title='Yeni Grup Sohbeti'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414',
                    marginTop: 30
                }}>Hesap Detayları</Text>

                <View style={{
                    marginTop: 15,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 1.5,
                }}>
                    <View style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                fontSize: 14,
                                color: '#141414',
                                fontWeight: '500'
                            }}>{"Altın Günü Yemeği"}</Text>

                            <FontAwesomeIcon
                                style={{
                                    marginLeft: 8
                                }}
                                icon={faChevronRight} color="#3D21A2" size={16} />
                        </View>
                        <Text style={{
                            fontSize: 14,
                            color: '#141414',
                            fontWeight: '400'
                        }}>{"₺127,00"}</Text>
                    </View>
                    <View style={{
                        height: 5,
                        alignSelf: 'stretch',
                        borderRadius: 5,
                        marginTop: 15,
                        backgroundColor: '#B8B8B8'
                    }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            locations={[0, 0.5, 1]}
                            colors={['#D63333', '#FFBE82', '#48BF24']} style={{
                                width: '90%',
                                height: 5,
                                borderRadius: 5,
                            }} />
                    </View>
                    <Text style={{
                        color: '#141414',
                        fontSize: 12,
                        fontWeight: '400',
                        marginTop: 5,
                        alignSelf: 'flex-end'
                    }}>{`₺127,00 / ₺381,00`}</Text>

                    <ScrollView style={{ marginTop: 5 }} horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                            }} source={{
                                uri: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                            }} />

                            <FontAwesomeIcon
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                }}
                                icon={faCheckCircle} color="#48BF24" size={16} />
                        </View>
                        <View style={{ marginRight: 10 }}>
                            <Image style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                            }} source={{
                                uri: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                            }} />

                            <FontAwesomeIcon
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                }}
                                icon={faCheckCircle} color="#48BF24" size={16} />
                        </View>
                        <View style={{ marginRight: 10 }}>
                            <Image style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                            }} source={{
                                uri: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                            }} />

                            <FontAwesomeIcon
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                }}
                                icon={faCheckCircle} color="#48BF24" size={16} />
                        </View>
                        <View style={{ marginRight: 10 }}>
                            <Image style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                            }} source={{
                                uri: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                            }} />

                            <FontAwesomeIcon
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                }}
                                icon={faCheckCircle} color="#48BF24" size={16} />
                        </View>
                    </ScrollView>
                </View>

                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414',
                    marginTop: 30
                }}>Hesap Seçimi</Text>


                <View style={{
                    borderRadius: 10,
                    alignSelf: 'stretch',
                    borderColor: '#DED2FA',
                    borderWidth: 1,
                    paddingTop: 10,
                    marginTop: 15,
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <View>
                            <Text style={{
                                fontSize: 11,
                                fontWeight: '500',
                                color: '#727272'
                            }}>PARANIN ÇEKİLECEĞİ HESAP</Text>
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
                        <FontAwesomeIcon icon={faChevronRight} color="#3D21A2" size={22} />
                    </View>

                    <View style={{
                        backgroundColor: '#FAF6FE',
                        paddingHorizontal: 10,
                        paddingBottom: 10,
                        marginTop: 20,
                        marginBottom: 1,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}>
                        <Text style={{
                            marginTop: 10,
                            fontSize: 14,
                            color: '#141414',
                            fontWeight: '400'
                        }}>
                            Limit: ₺950,00
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 1 }} />
                <Button
                    onPress={createNewGroupChat}
                    title="₺155,00 Öde" invert />
                <Button butonStyle={{
                    marginTop: 15,
                    marginBottom: 44
                }} title="Vazgeç" />
            </View>
        </Background>
    )
}

export default PayShareBill


const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});