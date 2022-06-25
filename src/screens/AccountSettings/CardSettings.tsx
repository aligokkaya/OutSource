import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Switch from '../Messages/Switch'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import MyCards from '../../components/MyCards'

const CardSettings = () => {
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} title='Kart Ayarları'>
            <View style={{
                marginVertical: 10
            }}>
                <MyCards onlyBackground />
            </View>
            <ScrollView style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <Text style={{
                    marginTop: 30,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Kart Ayarları</Text>

                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Favori Kartım Olarak Belirle</Text>
                    <Switch />
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Telefon ve E-posta Yoluyla Alışveriş</Text>
                    <Switch />
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Online (internet üzerinden) Alışveriş</Text>
                    <Switch on={true} />
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Yurt Dışında Kullanım</Text>
                    <Switch on={false} />
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Kart Borcu Ödeme Haftası</Text>
                    <View style={{
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FontAwesomeIcon
                            icon={faChevronRight} color="#E7E7E7" size={20} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ChangeCardPassword' as any)
                }}
                style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Kart Şifresini Değiştir</Text>
                    <View style={{
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FontAwesomeIcon
                            icon={faChevronRight} color="#E7E7E7" size={20} />
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </Background>
    )
}

export default CardSettings

const styles = StyleSheet.create({})