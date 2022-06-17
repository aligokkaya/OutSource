import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronRight, faMessage, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'

const Messages = () => {
    const navigation = useNavigation()

    return (
        <Background rightIcon={faMessage} onRightPress={() => {
            navigation.navigate('NewChat' as any)
        }} title='Mesajlar'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 30,
                    marginBottom: 15
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#141414'
                    }}>Sohbetler</Text>
                    <View style={{
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <FontAwesomeIcon icon={faPlus} color="#3D21A2" size={16} />
                        <Text style={{
                            marginLeft: 5,
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#3D21A2'
                        }}>Yeni Grup</Text>
                    </View>
                </View>

                <View style={{
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                    padding: 10,
                    borderRadius: 5,
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <FontAwesomeIcon icon={faSearch} color="#B8B8B8" size={16} />
                    <Text style={{
                        fontSize: 14,
                        color: '#B8B8B8',
                        fontWeight: '400',
                        marginLeft: 10
                    }}>Ara</Text>
                </View>

                <FlatList
                    style={{ marginTop: 15 }}
                    data={Array.from({ length: 20 }).fill({
                        photo: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                        name: 'Yakup Korkmaz',
                        message: 'Probabo, inquit, modo dixi, constituto, ut et lorels…',
                        time: '11:38'
                    })}
                    renderItem={({ item }: any) => (
                        <TouchableOpacity 
                        onPress={() => {
                            navigation.navigate('Chat' as any)
                        }}
                        style={{
                            paddingVertical: 15,
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderBottomColor: '#E7E7E7'
                        }}>
                            <Image
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 40
                                }}
                                source={{ uri: item.photo }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <View style={{ alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#141414',
                                        fontWeight: '500'
                                    }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{
                                            fontSize: 12,
                                            color: '#B8B8B8',
                                            fontWeight: '400',
                                        }}>{item.time}</Text>
                                        <FontAwesomeIcon icon={faChevronRight} color="#B8B8B8" size={12} />
                                    </View>
                                </View>
                                <Text style={{
                                    marginTop: 5,
                                    fontSize: 12,
                                    color: '#b8b8b8',
                                    fontWeight: '400'
                                }}>{item.message}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </Background>
    )
}

export default Messages


const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});