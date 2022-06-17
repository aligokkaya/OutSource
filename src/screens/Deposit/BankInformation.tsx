import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { faChevronDown, faChevronLeft, faChevronRight, faCircleInfo, faCopy, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Background from '../SendMoney/Background'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import DoubleButtonContainer from '../../components/DoubleButtonContainer'
import { useNavigation } from '@react-navigation/native'
import FormElement from '../../components/FormElement'
import Button from '../../components/Button'

const BankInformation = () => {
    const [selectedMenu, setSelectedMenu] = React.useState(0)
    const navigation = useNavigation()

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
                <Text style={styles.title}>Banka Seçimi</Text>
                <FormElement
                    icon={faChevronDown}
                    childrenStyle={{
                        paddingTop: 5
                    }}>
                    <View>
                        <Text style={{
                            color: '#3D21A2',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>Kurum Seçimi</Text>
                        <TextInput
                            style={{
                                fontSize: 17,
                                lineHeight: 17,
                                fontWeight: '500',
                                color: '#141414',
                                padding: 0,
                                margin: 0
                            }}
                            value='Garanti BBVA'
                        />
                    </View>
                </FormElement>
                <Text style={styles.title}>Para Yatırma Bilgileri</Text>

                <FormElement style={{
                    backgroundColor: '#F3F3F3',
                    borderColor: '#F3F3F3',
                    flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontSize: 14,
                        color: '#727272',
                        fontWeight: '400'
                    }}>Para Yatırma Limitiniz</Text>
                    <Text style={{
                        fontSize: 14,
                        color: '#141414',
                        fontWeight: '400'
                    }}>₺5.000,00</Text>
                </FormElement>

                <FormElement
                    icon={faCopy}
                    style={{
                        backgroundColor: '#FAF6FE',
                        borderColor: '#FAF6FE',
                    }}
                    childrenStyle={{
                        paddingTop: 5,
                    }}>
                    <View>
                        <Text style={{
                            color: '#3D21A2',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>Papel IBAN</Text>
                        <TextInput
                            style={{
                                fontSize: 17,
                                lineHeight: 17,
                                fontWeight: '500',
                                color: '#3D21A2',
                                padding: 0,
                                margin: 0,
                            }}
                            value='TR55 0006 2000 1234 0006 1234 56'
                        />
                    </View>
                </FormElement>
                <View style={{
                    marginTop: 5,
                    alignSelf: 'stretch',
                    flexDirection: 'row'
                }}>
                    <FontAwesomeIcon icon={faCircleInfo} color="#727272" size={14} />
                    <Text style={{
                        marginLeft: 6,
                        fontSize: 12,
                        color: '#727272',
                        fontWeight: '400'
                    }}>Sağdaki kopyala ikonuna tıklayıp, bankanızın mobil uygulamasındaki IBAN alanına yapıştırın.</Text>
                </View>
                <FormElement
                    icon={faCopy}
                    style={{
                        backgroundColor: '#FAF6FE',
                        borderColor: '#FAF6FE',
                    }}
                    childrenStyle={{
                        paddingTop: 5,
                    }}>
                    <View>
                        <Text style={{
                            color: '#3D21A2',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>Papel Numarası</Text>
                        <TextInput
                            style={{
                                fontSize: 17,
                                lineHeight: 17,
                                fontWeight: '500',
                                color: '#3D21A2',
                                padding: 0,
                                margin: 0,
                            }}
                            value='12345678'
                        />
                    </View>
                </FormElement>
                <View style={{
                    marginTop: 5,
                    alignSelf: 'stretch',
                    flexDirection: 'row'
                }}>
                    <FontAwesomeIcon icon={faCircleInfo} color="#727272" size={14} />
                    <Text style={{
                        marginLeft: 6,
                        fontSize: 12,
                        color: '#727272',
                        fontWeight: '400'
                    }}>Sağdaki kopyala ikonuna tıklayıp, bankanızın mobil uygulamasındaki açıklama alanına yapıştırın.</Text>
                </View>
                <FormElement
                    icon={faCopy}
                    style={{
                        backgroundColor: '#FAF6FE',
                        borderColor: '#FAF6FE',
                    }}
                    childrenStyle={{
                        paddingTop: 5,
                    }}>
                    <View>
                        <Text style={{
                            color: '#3D21A2',
                            fontSize: 12,
                            lineHeight: 12,
                            fontWeight: '500',
                        }}>Hesap Sahibi</Text>
                        <TextInput
                            style={{
                                fontSize: 17,
                                lineHeight: 17,
                                fontWeight: '500',
                                color: '#3D21A2',
                                padding: 0,
                                margin: 0,
                            }}
                            value='Cansu Ural'
                        />
                    </View>
                </FormElement>
                <View style={{
                    marginTop: 5,
                    alignSelf: 'stretch',
                    flexDirection: 'row'
                }}>
                    <FontAwesomeIcon icon={faCircleInfo} color="#727272" size={14} />
                    <Text style={{
                        marginLeft: 6,
                        fontSize: 12,
                        color: '#727272',
                        fontWeight: '400'
                    }}>Para Yatıracak hesap sizin adınıza olmalıdır.</Text>
                </View>
                <Button
                    butonStyle={{
                        marginVertical: 44
                    }}
                    title="Garanti BBVA Uygulamasına Geç"
                    invert
                />
            </ScrollView>
        </Background>
    )
}

export default BankInformation

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
})