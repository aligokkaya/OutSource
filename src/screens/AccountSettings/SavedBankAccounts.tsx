import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const SavedBankAccounts = () => {
    const navigation = useNavigation()

    const renderItem = ({ item: { title, iban, address } }: any) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('BankAccountDetails' as any)
            }}
            style={{
                borderRadius: 10,
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderWidth: 1,
                borderColor: '#DED2FA',
                marginTop: 15,
                alignItems: 'center',
                flexDirection: 'row'
            }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, color: '#141414', fontWeight: '500' }}>{title}</Text>
                <Text style={{ fontSize: 14, color: '#141414', fontWeight: '400', marginTop: 5 }}>{iban}</Text>
                <Text style={{ fontSize: 14, color: '#727272', fontWeight: '400', marginTop: 5 }}>{address}</Text>
            </View>
            <FontAwesomeIcon icon={faChevronRight} color="#3D21A2" size={16.5} />
        </TouchableOpacity>
    )

    return (
        <Background leftIcon={faChevronLeft} title='Kayıtlı Banka Hesapları'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <Text style={{
                    fontSize: 12,
                    color: '#141414',
                    fontWeight: '400',
                    padding: 15,
                    paddingTop: 20,
                }}><Text style={{ fontWeight: '500' }}>5 Adet</Text> kayıtlı banka listeleniyor.</Text>

                <Button
                    icon={faPlus}
                    iconProperty={{
                        size: 20,
                        color: '#3D21A2'
                    }}
                    onPress={() => {
                        navigation.navigate('NewBankAccount' as any)
                    }}
                    title="Yeni Banka Kaydet"
                    butonStyle={{
                        marginVertical: 15,
                        marginHorizontal: 15
                    }} />

                <FlatList
                    style={{
                        flex: 1,
                        paddingHorizontal: 15,
                    }}
                    data={[
                        {
                            _id: 1,
                            title: 'Garanti BBVA',
                            iban: 'TR55 0006 2000 1234 0006 1234 56',
                            address: '239-6625123 Güzelyalı'
                        },
                        {
                            _id: 2,
                            title: 'Garanti BBVA',
                            iban: 'TR55 0006 2000 1234 0006 1234 56',
                            address: '239-6625123 Güzelyalı'
                        },
                        {
                            _id: 3,
                            title: 'Garanti BBVA',
                            iban: 'TR55 0006 2000 1234 0006 1234 56',
                            address: '239-6625123 Güzelyalı'
                        },
                        {
                            _id: 4,
                            title: 'Garanti BBVA',
                            iban: 'TR55 0006 2000 1234 0006 1234 56',
                            address: '239-6625123 Güzelyalı'
                        },
                        {
                            _id: 5,
                            title: 'Garanti BBVA',
                            iban: 'TR55 0006 2000 1234 0006 1234 56',
                            address: '239-6625123 Güzelyalı'
                        },
                    ]}
                    renderItem={renderItem}
                    keyExtractor={i => i._id.toString()}
                />
            </View>
        </Background>
    )
}

export default SavedBankAccounts

const styles = StyleSheet.create({})