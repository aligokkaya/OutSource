import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faEarth, faHamburger, faPaperPlane, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const ChatProfile = () => {
    return (
        <Background
            leftIcon={faChevronLeft}
            title="Kişi Bilgileri"
        >
            <View style={{
                alignItems: 'center',
            }}>
                <Image style={{
                    marginTop: 15,
                    width: Dimensions.get('window').width / 3.7,
                    height: Dimensions.get('window').width / 3.7,
                    borderRadius: Dimensions.get('window').width / 3.7,
                    borderWidth: 2,
                    borderColor: 'white'
                }} source={{
                    uri: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                }} />
                <Text style={{
                    fontSize: 22,
                    fontWeight: '500',
                    lineHeight: 30,
                    color: 'white',
                    marginTop: 10
                }}>Cansu Ural</Text>
                <View style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                    paddingHorizontal: 12,
                    height: 23,
                    borderRadius: 23,
                    marginTop: 10,
                }}>
                    <View style={{ width: 24, height: 16, backgroundColor: 'red', marginRight: 5 }} />
                    <Text style={{
                        color: 'white',
                        fontSize: 14,
                        fontWeight: '400'
                    }}>+90 544 893 19 62</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <View style={{
                        flex: 1,
                        aspectRatio: 1,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: '#DED2FA'
                    }}>
                        <FontAwesomeIcon
                            icon={faPaperPlane} color="#FFF" size={24} />
                        <Text style={{
                            marginTop: 10,
                            fontSize: 12,
                            color: '#FFF',
                            fontWeight: '500'
                        }}>Gönder</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        aspectRatio: 1,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: '#DED2FA',
                        marginHorizontal: 15
                    }}>
                        <FontAwesomeIcon
                            icon={faEarth} color="#FFF" size={24} />
                        <Text style={{
                            marginTop: 10,
                            fontSize: 12,
                            color: '#FFF',
                            fontWeight: '500'
                        }}>Talep Et</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        aspectRatio: 1,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: '#DED2FA'
                    }}>
                        <FontAwesomeIcon
                            icon={faHamburger} color="#FFF" size={24} />
                        <Text style={{
                            marginTop: 10,
                            fontSize: 12,
                            color: '#FFF',
                            fontWeight: '500'
                        }}>Bölüştür</Text>
                    </View>
                </View>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                paddingHorizontal: 15,
            }}>
                <Text style={{
                    marginTop: 20,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Bildirimler</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414'
                    }}>Sessize Al</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{
                            height: 12,
                            borderRadius: 6,
                            width: 40,
                            backgroundColor: '#CCF8A7',
                            transform: [{
                                translateX: 20
                            }]
                        }} />
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            backgroundColor: '#48BF24',
                        }} />
                    </View>
                </View>
                <View style={{ alignSelf: 'stretch', height: 1, backgroundColor: '#E7E7E7' }} />

                <Text style={{
                    marginTop: 20,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Sohbet İşlemleri</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#D63333'
                    }}>Sohbeti Sil</Text>
                </View>
                <View style={{ alignSelf: 'stretch', height: 1, backgroundColor: '#E7E7E7' }} />
                <Text style={{
                    marginTop: 20,
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#D63333'
                }}>Kişiyi Engelle</Text>
                <View style={{ marginTop: 20, alignSelf: 'stretch', height: 1, backgroundColor: '#E7E7E7' }} />
            </View>
        </Background>
    )
}

export default ChatProfile

const styles = StyleSheet.create({})