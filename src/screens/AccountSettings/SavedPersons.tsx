import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faChevronRight, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const SavedPersons = () => {
    const navigation = useNavigation()

    const renderItem = ({ item: { title } }: any) => (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#E7E7E7',
            paddingVertical: 12
        }}>
            <Image
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40
                }}
                source={{
                    uri: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                }}
            />
            <Text style={{
                marginLeft: 15,
                fontSize: 14,
                fontWeight: '500',
                color: '#141414'
            }}>{title}</Text>
        </View>
    )

    return (
        <Background leftIcon={faChevronLeft} title='Kayıtlı Kişilerim'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <View style={{ marginTop: 20, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#141414'
                    }}>
                        Kişi Listesi
                    </Text>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <FontAwesomeIcon icon={faEdit} color="#3D21A2" size={16} />
                        <Text style={{
                            marginLeft: 5,
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#3D21A2'
                        }}>Düzenle</Text>
                    </View>
                </View>
                <Text style={{
                    fontSize: 12,
                    color: '#141414',
                    fontWeight: '400',
                    padding: 15,
                }}><Text style={{ fontWeight: '500' }}>17 Adet</Text> kayıtlı banka listeleniyor.</Text>

                <Button
                    icon={faPlus}
                    iconProperty={{
                        size: 20,
                        color: '#3D21A2'
                    }}
                    onPress={() => {

                    }}
                    title="Yeni Kişi Kaydet"
                    butonStyle={{
                        marginHorizontal: 15
                    }} />

                <FlatList
                    style={{
                        flex: 1,
                        marginTop: 15,
                        paddingHorizontal: 15,
                    }}
                    data={[
                        {
                            _id: 1,
                            title: 'Sude Hasırcı',
                        },
                        {
                            _id: 2,
                            title: 'Tülin Erdoğan',
                        },
                        {
                            _id: 3,
                            title: 'Zafer Aydın',
                        },
                        {
                            _id: 4,
                            title: 'Tuğba Çetin',
                        },
                        {
                            _id: 5,
                            title: 'Nil Şimşek',
                        },
                        {
                            _id: 6,
                            title: 'Berke Şimşek',
                        },
                    ]}
                    renderItem={renderItem}
                    keyExtractor={i => i._id.toString()}
                />
            </View>
        </Background>
    )
}

export default SavedPersons

const styles = StyleSheet.create({})