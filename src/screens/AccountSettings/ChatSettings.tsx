import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Switch from '../Messages/Switch'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import MyCards from '../../components/MyCards'

const ChatSettings = () => {
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} title='Sohbet Ayarları'>
            <ScrollView style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <Text style={{
                    marginTop: 20,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Gizlilik</Text>

                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Okundu Bilgisi</Text>
                    <Switch />
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Engellenen Kişiler</Text>
                    <View style={{
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FontAwesomeIcon
                            icon={faChevronRight} color="#E7E7E7" size={20} />
                    </View>
                </View>
                <Text style={{
                    marginTop: 30,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Sohbet Bildirimleri</Text>
                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Bildirimleri Göster</Text>
                    <Switch on={false} />
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Bildirim Sesleri</Text>
                    <Switch />
                </View>
                <Text style={{
                    marginTop: 30,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Grup Sohbeti Bildirimleri</Text>
                <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 20, borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#141414',
                        marginRight: 15
                    }}>Bildirimleri Göster</Text>
                    <Switch on={false} />
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
                    }}>Bildirim Sesleri</Text>
                    <Switch />
                </TouchableOpacity>


                <Button
                    onPress={() => {
                        navigation.navigate('LegalLimits' as any)
                    }}
                    butonStyle={{
                        marginTop: 44,
                    }}
                    title="Bildirim Ayarlarını Sıfırla" />
                <Button
                    onPress={() => {
                        navigation.navigate('LegalLimits' as any)
                    }}
                    butonStyle={{
                        marginBottom: 44,
                        marginTop: 15
                    }}
                    invert title="Değişiklikleri Kaydet" />
            </ScrollView>

        </Background>
    )
}

export default ChatSettings

const styles = StyleSheet.create({})