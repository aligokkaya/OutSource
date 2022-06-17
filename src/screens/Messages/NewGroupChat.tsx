import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faChevronRight, faCircleXmark, faMessage, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'

const persons = [
    {
        image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj',
        name: 'Figen Gül'
    }, {
        image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj',
        name: 'Yasemin Gül'
    }
]

const NewGroupChat = () => {
    const navigation = useNavigation()

    const createNewGroupChat = () => {
        navigation.navigate('CreateNewGroupChat' as any)
    }

    const renderMember = ({ item }: any) => (
        <TouchableOpacity
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
                }} source={{ uri: item.photo }} />
                <Text style={{
                    marginLeft: 15,
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#141414'
                }}>{item.name}</Text>
            </View>

            <FontAwesomeIcon icon={faChevronRight} color="#E7E7E7" size={18} />
        </TouchableOpacity>
    )

    return (
        <Background leftIcon={faChevronLeft} title='Yeni Grup Sohbeti'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <View style={{
                    marginTop: 30,
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

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                        alignSelf: 'stretch',
                        marginTop: 25,
                        flexGrow: 0
                    }}>
                    {
                        persons.map((item, index) => (
                            <View style={{
                                backgroundColor: '#FAF6FE',
                                height: 32,
                                borderRadius: 32,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: 15
                            }}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 32,
                                    }} />
                                <Text style={{
                                    fontSize: 14,
                                    marginHorizontal: 10,
                                    color: '#141414',
                                    fontWeight: '500'
                                }}>{item.name}</Text>

                                <FontAwesomeIcon style={{
                                    marginHorizontal: 6
                                }} icon={faCircleXmark} color="#3D21A2" size={20} />
                            </View>
                        ))
                    }
                </ScrollView>

                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414',
                    marginTop: 30
                }}>Kişiler (9)</Text>
                <FlatList
                    style={{
                        flex: 1
                    }}
                    data={Array.from({ length: 9 }).fill({
                        photo: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                        name: 'Sezer Çelik',
                    })}
                    renderItem={renderMember}
                />
                <View style={{
                    backgroundColor: 'white',
                    paddingTop: 15
                }}>
                    <Button
                        onPress={createNewGroupChat}
                        title="Devam Et" invert />
                    <Button butonStyle={{
                        marginTop: 15,
                        marginBottom: 44
                    }} title="Vazgeç" />
                </View>
            </View>
        </Background>
    )
}

export default NewGroupChat


const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});