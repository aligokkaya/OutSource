import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faCheckCircle, faCheckDouble, faChevronLeft, faChevronRight, faChevronUp, faHamburger, faMessage, faPaperPlane, faPlane, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import Button from '../../components/Button'

const datas = [
    {
        message: 'Alii autem, quibus ego cum a se esse expetendam et quas molestias excepturi sint',
        time: '13:40',
        seen: true,
        side: 'RIGHT'
    },
    {
        type: 'TIME',
        text: 'Bugün'
    },
    {
        message: 'Filium morte multavit si sine dubio praeclara sunt, explicabo nemo.',
        time: '13:41',
        seen: true,
        side: 'LEFT'
    },
    {
        reply: {
            type: 'MESSAGE',
            title: 'Sen',
            message: 'Filium morte multavit si sine dubio praeclara sunt, explicabo nemo.'
        },
        message: 'Filium morte multavit si sine dubio praeclara sunt, explicabo nemo.',
        time: '13:41',
        seen: true,
        side: 'LEFT'
    },
    {
        reply: {
            type: 'MESSAGE',
            title: 'Sen',
            message: 'Filium morte multavit si sine dubio praeclara sunt, explicabo nemo.'
        },
        message: 'Filium morte multavit si sine dubio praeclara sunt, explicabo nemo.',
        time: '13:41',
        seen: true,
        side: 'RIGHT'
    },
    {
        reply: {
            type: 'PAYMENT',
            title: 'Altın Günü Yemeği',
            price: '₺127,00',
            pay: '₺55,90',
            collected: '₺127,00',
            total: '₺381,00'
        },
        message: 'Filium morte multavit si sine dubio praeclara sunt, explicabo nemo.',
        time: '13:41',
        seen: true,
        side: 'LEFT'
    },
    {
        reply: {
            type: 'PAYMENT',
            title: 'Altın Günü Yemeği',
            price: '₺127,00',
            pay: '₺55,90',
            collected: '₺127,00',
            total: '₺381,00'
        },
        message: 'Filium morte multavit si sine dubio praeclara sunt, explicabo nemo.',
        time: '13:41',
        seen: true,
        side: 'RIGHT'
    },
    {
        reply: {
            type: 'PAYMENT',
            title: 'Altın Günü Yemeği',
            price: '₺127,00',
            pay: '₺55,90',
            collected: '₺127,00',
            total: '₺381,00',
            paid: true
        },
        message: 'Filium morte multavit si sine dubio praeclara sunt, explicabo nemo.',
        time: '13:41',
        seen: true,
        side: 'LEFT'
    },
]

const Chat = () => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()
    const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

    // callbacks
    const handlePresentModalPress = React.useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = React.useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);


    const replyComponent = (item: any) => {
        if (item.reply.type === 'MESSAGE') {
            return (
                <View style={{
                    marginBottom: 10,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        height: '100%',
                        backgroundColor: item.side === 'LEFT' ? '#FFBE82' : '#02BDD0',
                        width: 5,
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                    }} />
                    <View style={{
                        paddingTop: 5,
                        paddingBottom: 10,
                        paddingHorizontal: 10,
                        backgroundColor: item.side === 'LEFT' ? '#FFECCD' : '#CAFCF0',
                    }}>
                        <Text style={{
                            fontSize: 14,
                            lineHeight: 18,
                            color: '#141414',
                            fontWeight: '500'
                        }}>{item.reply.title}</Text>
                        <Text style={{
                            marginTop: 5,
                            fontSize: 14,
                            lineHeight: 18,
                            color: '#141414',
                            fontWeight: '400'
                        }}>{item.reply.message}</Text>
                    </View>
                </View>
            )
        }

        return (
            <View style={{
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
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
                    <Text style={{
                        fontSize: 14,
                        color: '#141414',
                        fontWeight: '500'
                    }}>{item.reply.title}</Text>
                    <Text style={{
                        fontSize: 14,
                        color: '#141414',
                        fontWeight: '400'
                    }}>{item.reply.price}</Text>
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
                }}>{`${item.reply.collected} / ${item.reply.total}`}</Text>

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
                {
                    item.reply.paid ? (
                        <TouchableOpacity style={{
                            marginTop: 10,
                            height: 36,
                            borderRadius: 5,
                            alignSelf: 'stretch',
                            backgroundColor: '#CCF8A7',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}>
                            <FontAwesomeIcon
                                icon={faCheckCircle} color="#48BF24" size={16} />
                            <Text style={{
                                marginLeft: 6.5,
                                fontSize: 14,
                                fontWeight: '500',
                                color: '#48BF24'
                            }}>Payını Ödedin</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={{
                            marginTop: 10,
                            height: 36,
                            borderRadius: 5,
                            alignSelf: 'stretch',
                            backgroundColor: '#48BF24',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '500',
                                color: 'white'
                            }}>{`${item.reply.pay} Öde`}</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        )
    }

    const renderItem = ({ item }: any) => {
        if (item.type === 'TIME') {
            return (
                <View style={{
                    alignSelf: 'center',
                    marginBottom: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 3,
                    backgroundColor: 'white',
                    paddingHorizontal: 20,
                    height: 25,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 13,
                        color: '#727272',
                        fontWeight: '400'
                    }}>{item.text}</Text>
                </View>
            )
        }

        return (
            <View style={{
                alignSelf: item.side === 'RIGHT' ? 'flex-end' : 'flex-start',
                width: Dimensions.get('window').width * 0.65,
                marginBottom: 20,
                padding: 10,
                borderWidth: 1,
                backgroundColor: item.side === 'LEFT' ? '#FFF7E6' : 'white',
                borderColor: item.side === 'LEFT' ? '#FFBE82' : '#E7E7E7',
                borderRadius: 8,
                [item.side === 'LEFT' ? 'marginLeft' : 'marginRight']: 15,
                [item.side === 'LEFT' ? 'borderBottomLeftRadius' : 'borderBottomRightRadius']: 0,
            }}>
                {
                    Boolean(item.reply) && replyComponent(item)
                }

                <Text style={{
                    fontSize: 14,
                    lineHeight: 18,
                    color: '#141414',
                    fontWeight: '400'
                }}>{item.message}</Text>

                <View style={{
                    flexDirection: 'row',
                    alignSelf: item.side === 'LEFT' ? 'flex-start' : 'flex-end',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 8
                }}>
                    <Text style={{
                        fontSize: 12,
                        color: '#727272',
                        fontWeight: '400',
                        marginRight: 5
                    }}>{item.time}</Text>
                    {
                        item.side === 'RIGHT' && (
                            <FontAwesomeIcon icon={faCheckDouble} color="#48BF24" size={12} />
                        )
                    }
                </View>

                <View style={item.side === 'LEFT' ? styles.triangleLeft : styles.triangleRight} />
                <View style={item.side === 'LEFT' ? styles.triangle2Left : styles.triangle2Right} />
            </View>
        )
    }

    const onSendPress = () => {
        navigation.navigate('GroupChat' as any)
    }

    return (
        <>
            <Background
                leftIcon={faChevronLeft}
                customTitle={
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ChatProfile' as any)
                        }}
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Image
                            style={{
                                width: 37.5,
                                height: 37.5,
                                borderRadius: 37.5,
                                borderWidth: 1.25,
                                borderColor: 'white'
                            }}
                            source={{
                                uri: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                            }} />
                        <View style={{ justifyContent: 'center', marginLeft: 11.5 }}>
                            <Text style={{
                                fontSize: 16,
                                color: 'white',
                                fontWeight: '500'
                            }}>Cansu Ural</Text>
                            <Text style={{
                                fontSize: 11,
                                color: 'white',
                                fontWeight: '400'
                            }}>Kişisel Bilgisi için dokunun</Text>
                        </View>
                    </TouchableOpacity>
                }
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}>

                    <FlatList
                        style={{ marginTop: 15, paddingHorizontal: 15 }}
                        data={datas}
                        renderItem={renderItem}
                    />
                    <View style={{
                        flexDirection: 'row',
                        padding: 15,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        elevation: 3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                handlePresentModalPress()
                            }}
                            style={{
                                backgroundColor: '#FAF6FE',
                                height: 35,
                                width: 35,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'flex-end',
                            }}>
                            <FontAwesomeIcon icon={faChevronUp} color="#3D21A2" size={16} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder='Buraya Yazın'
                            multiline
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                                marginHorizontal: 10,
                                flex: 1,
                                minHeight: 35,
                                maxHeight: 90,
                                borderRadius: 8,
                                borderWidth: 1,
                                borderColor: '#E7E7E7',
                                fontSize: 14,
                                color: '#141414',
                                fontWeight: '400',
                                marginBottom: insets.bottom
                            }}
                        />
                        <TouchableOpacity
                            onPress={onSendPress}
                            style={{
                                backgroundColor: '#3D21A2',
                                height: 35,
                                width: 35,
                                borderRadius: 35,
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'flex-end',
                            }}>
                            <FontAwesomeIcon icon={faPaperPlane} color="#FFF" size={16} />
                        </TouchableOpacity>
                    </View>


                    <BottomSheetModalProvider>
                        <BottomSheetModal
                            ref={bottomSheetModalRef}
                            index={1}
                            snapPoints={[150, 270]}
                            onChange={handleSheetChanges}
                        >
                            <View style={{
                                flex: 1,
                                padding: 15,
                                paddingBottom: 44,
                            }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{
                                        flex: 1,
                                        aspectRatio: 1,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#DED2FA'
                                    }}>
                                        <FontAwesomeIcon
                                            icon={faSearch} color="#3D21A2" size={16} />
                                        <Text style={{
                                            marginTop: 10,
                                            fontSize: 12,
                                            color: '#3D21A2',
                                            fontWeight: '500'
                                        }}>Para Talep Et</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        aspectRatio: 1,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#DED2FA',
                                        marginHorizontal: 15
                                    }}>
                                        <FontAwesomeIcon
                                            icon={faPaperPlane} color="#3D21A2" size={16} />
                                        <Text style={{
                                            marginTop: 10,
                                            fontSize: 12,
                                            color: '#3D21A2',
                                            fontWeight: '500'
                                        }}>Para Gönder</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        aspectRatio: 1,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#DED2FA'
                                    }}>
                                        <FontAwesomeIcon
                                            icon={faHamburger} color="#3D21A2" size={16} />
                                        <Text style={{
                                            marginTop: 10,
                                            fontSize: 12,
                                            color: '#3D21A2',
                                            fontWeight: '500'
                                        }}>Hesap Bölüştür</Text>
                                    </View>
                                </View>
                                <Button
                                    onPress={() => {
                                        bottomSheetModalRef.current?.dismiss();
                                    }}
                                    title="Vazgeç" />
                            </View>
                        </BottomSheetModal>
                    </BottomSheetModalProvider>

                </View>
            </Background>
        </>
    )
}

export default Chat


const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    },
    triangleRight: {
        position: 'absolute',
        bottom: 0.25,
        right: -14.5,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 15,
        borderBottomWidth: 15,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        borderLeftColor: 'transparent',
        zIndex: 3,
    },
    triangle2Right: {
        position: 'absolute',
        bottom: -1,
        right: -17,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 17,
        borderBottomWidth: 17,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#E7E7E7',
        borderLeftColor: 'transparent',
        zIndex: 2
    },
    triangleLeft: {
        position: 'absolute',
        bottom: -0.3,
        left: -14.5,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 15,
        borderLeftWidth: 15,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#FFF7E6',
        borderLeftColor: 'transparent',
        zIndex: 3,
    },
    triangle2Left: {
        position: 'absolute',
        bottom: -1,
        left: -17,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 17,
        borderLeftWidth: 17,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#FFBE82',
        borderLeftColor: 'transparent',
        zIndex: 2
    },
});