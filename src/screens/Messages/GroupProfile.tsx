import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faChevronRight, faEarth, faHamburger, faPaperPlane, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { connectActionSheet, useActionSheet  } from '@expo/react-native-action-sheet';

const GroupProfile = () => {
    const { showActionSheetWithOptions } = useActionSheet();

    const renderMember = (item: any) => (
        <TouchableOpacity
            onPress={() => {
                // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
                const options = ['Bilgi', 'Grup Yöneticisi Yap', 'Gruptan Çıkar', 'Vazgeç'];
                const cancelButtonIndex = 3;

                showActionSheetWithOptions(
                    {
                        title: 'Serpil Armağan',
                        options,
                        cancelButtonIndex,
                    },
                    (buttonIndex) => {
                        console.log(buttonIndex)
                        // Do something here depending on the button index selected
                    }
                );
            }}
            style={{
                flexDirection: 'row', alignItems: 'center', paddingVertical: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#E7E7E7'
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Image style={{
                    width: 35,
                    height: 35,
                    borderRadius: 35
                }} source={{ uri: item.logo }} />
                <Text style={{
                    marginLeft: 15,
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#141414'
                }}>{item.title}</Text>
            </View>
            {
                item.isAdmin ? (
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#727272'
                    }}>{'Admin'}</Text>
                ) : (
                    <FontAwesomeIcon icon={faChevronRight} color="#E7E7E7" size={18} />
                )
            }
        </TouchableOpacity>
    )

    return (
        <Background
            leftIcon={faChevronLeft}
            title="Grup Bilgileri"
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
                    uri: 'https://www.birbilenesorduk.com/wp-content/uploads/2022/05/kahkaha-emoji.jpg'
                }} />
                <Text style={{
                    fontSize: 22,
                    fontWeight: '500',
                    lineHeight: 30,
                    color: 'white',
                    marginTop: 10
                }}>Cansu’nun Doğum Günü 🎉🎂</Text>
                <View style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                    paddingHorizontal: 12,
                    height: 23,
                    borderRadius: 23,
                    marginTop: 10,
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 14,
                        fontWeight: '400'
                    }}>4 Katılımcı</Text>
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
            <ScrollView style={{
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
                }}>Katılımcılar</Text>
                {
                    renderMember({
                        logo: 'https://www.birbilenesorduk.com/wp-content/uploads/2022/05/kahkaha-emoji.jpg',
                        title: 'Siz',
                        isAdmin: true
                    })
                }
                {
                    renderMember({
                        logo: 'https://www.birbilenesorduk.com/wp-content/uploads/2022/05/kahkaha-emoji.jpg',
                        title: 'Serpil Armağan'
                    })
                }
                {
                    renderMember({
                        logo: 'https://www.birbilenesorduk.com/wp-content/uploads/2022/05/kahkaha-emoji.jpg',
                        title: 'İsmail Aslan'
                    })
                }
                {
                    renderMember({
                        logo: 'https://www.birbilenesorduk.com/wp-content/uploads/2022/05/kahkaha-emoji.jpg',
                        title: 'Ayhan Özkan'
                    })
                }
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
            </ScrollView>
        </Background>
    )
}

export default connectActionSheet(GroupProfile);

const styles = StyleSheet.create({})