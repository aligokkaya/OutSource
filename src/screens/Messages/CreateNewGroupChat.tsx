import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faChevronRight, faCircleXmark, faMessage, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import { TextInput } from 'react-native-gesture-handler'

const persons = [
    {
        image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj',
        name: 'Figen Gül'
    }, {
        image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj',
        name: 'Yasemin Gül'
    }
]

const CreateNewGroupChat = () => {
    const navigation = useNavigation()

    const payShare = () => {
        navigation.navigate('PayShareBill' as any)
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
                }}>Grup Bilgisi (4)</Text>

                <View style={{
                    width: 70,
                    height: 70,
                    borderRadius: 70,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FAF6FE',
                    marginTop: 15
                }}>
                    <FontAwesomeIcon style={{
                        marginHorizontal: 6
                    }} icon={faPlus} color="#3D21A2" size={20} />
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#3D21A2'
                    }}>Fotoğraf Ekle</Text>
                </View>

                <View style={{
                    height: 50,
                    marginTop: 30,
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                    borderRadius: 5,
                    paddingHorizontal: 10
                }}>
                    <TextInput
                        placeholder='Grup Adı'
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: '#141414',
                            fontWeight: '400',
                        }} />
                </View>

                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414',
                    marginTop: 30
                }}>Katılımcılar (4)</Text>

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

                <Button
                    butonStyle={{
                        marginTop: 30
                    }}
                    onPress={payShare}
                    title="Grubu Oluştur" invert />
                <Button butonStyle={{
                    marginTop: 15,
                    marginBottom: 44
                }} title="Vazgeç" />
            </View>
        </Background>
    )
}

export default CreateNewGroupChat


const styles = StyleSheet.create({
    title: {
        zIndex: -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
        marginTop: 30
    }
});