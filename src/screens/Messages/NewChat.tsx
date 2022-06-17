import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faChevronRight, faMessage, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'

const NewChat = () => {
    const navigation = useNavigation()


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
        <Background leftIcon={faChevronLeft} title='Yeni Sohbet'>
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
                <Button
                    onPress={() => {
                        navigation.navigate('NewGroupChat' as any)
                    }}
                    butonStyle={{ marginTop: 15 }} icon={faPlus} iconProperty={{ color: '#3D21A2' } as any} title="Yeni Grup Oluştur" />
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414',
                    marginTop: 30
                }}>Gruplar (1)</Text>
                <FlatList
                    data={Array.from({ length: 1 }).fill({
                        photo: 'https://www.birbilenesorduk.com/wp-content/uploads/2022/05/kahkaha-emoji.jpg',
                        name: 'Cansu’nun Doğum Günü 🎉🎂',
                    })}
                    renderItem={renderMember}
                />
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414',
                    marginTop: 30
                }}>Kişiler (6)</Text>
                <FlatList
                    data={Array.from({ length: 6 }).fill({
                        photo: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                        name: 'Sezer Çelik',
                    })}
                    renderItem={renderMember}
                />
            </View>
        </Background>
    )
}

export default NewChat


const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});