import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

const data = Array.from({ length: 20 }).fill({
    icon: 'https://yt3.ggpht.com/ytc/AKedOLTfBJPk71bq3zo5sWfIkcQwZF4-KfjwmZViE7tDOgM=s900-c-k-c0x00ffffff-no-rj',
    title: 'Garanti BBVA',
    message: 'Para Çekme',
    money: '-₺928,00',
    date: '21 Mar Pzt, 11:38'
})

const WithdrawMoney = () => {
    const navigation = useNavigation()
    
    const onCreateWithdrawRequestPress = () => {
        navigation.navigate('CreateWithdrawRequest' as any)
    }

    return (
        <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Çek'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                alignSelf: 'stretch',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
            }}>
                <FlatList
                    data={data}
                    ListHeaderComponent={
                        <View style={{ alignSelf: 'stretch', paddingVertical: 20, backgroundColor: 'white' }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: '#141414',
                            }}>Para Çekim Geçmişi</Text>
                        </View>
                    }
                    stickyHeaderIndices={[0]}
                    renderItem={({ item }: any) => (
                        <View style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingVertical: 16,
                            borderBottomWidth: 1,
                            borderBottomColor: '#E7E7E7'
                        }}>
                            <Image
                                source={{ uri: item.icon }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 10
                                }}
                            />
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flex: 1,
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#141414',
                                        fontWeight: '500'
                                    }}>{item.title}</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: '500',
                                        color: '#D63333'
                                    }}>{item.money}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flex: 1,
                                }}>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#727272',
                                        fontWeight: '400'
                                    }}>{item.message}</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#727272',
                                        fontWeight: '400'
                                    }}>{item.date}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
                <Button
                    invert
                    onPress={onCreateWithdrawRequestPress}
                    title='Yeni Para Çekim Talebi Oluştur'
                    butonStyle={{
                        marginVertical: 25
                    }}
                />
            </View>
        </Background>
    )
}

export default WithdrawMoney

const styles = StyleSheet.create({})