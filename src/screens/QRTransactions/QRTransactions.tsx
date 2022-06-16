import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'

const QRTransactions = () => {
    const navigation = useNavigation()

    const renderItem = ({ title, message, onPress }: any) => (
        <TouchableOpacity
            onPress={onPress}
            style={{
                alignSelf: 'stretch',
                borderRadius: 8,
                borderColor: '#DED2FA',
                borderWidth: 1.5,
                marginTop: 10,
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
            <View>
                <Text style={{
                    fontSize: 14,
                    color: '#141414',
                    fontWeight: '500'
                }}>{title}</Text>
                <Text style={{
                    marginTop: 5,
                    fontSize: 12,
                    color: '#727272'
                }}>{message}</Text>
            </View>

            <FontAwesomeIcon icon={faChevronRight} color="#3D21A2" size={18} />
        </TouchableOpacity>
    )

    return (
        <Background
            leftIcon={faChevronLeft}
            title='QR İşlemleri'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                alignSelf: 'stretch',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
            }}>
                {
                    renderItem({
                        title: 'QR Oluştur',
                        message: 'Probabo, inquit, sic agam, ut aut quid.',
                        onPress: () => {
                            navigation.navigate('YourQR' as any)
                        }
                    })
                }
                {
                    renderItem({
                        title: 'QR ile Para Gönder',
                        message: 'Probabo, inquit, sic agam, ut aut quid.',
                        onPress: () => {
                            navigation.navigate('SendMoneyWithQR' as any)
                        }
                    })
                }
                {
                    renderItem({
                        title: 'QR ile Para Talep Et',
                        message: 'Probabo, inquit, sic agam, ut aut quid.',
                        onPress: () => {
                            navigation.navigate('QRRequestMoney' as any)
                        }
                    })
                }
                {
                    renderItem({
                        title: 'QR ile Öde',
                        message: 'Probabo, inquit, sic agam, ut aut quid.',
                        onPress: () => {
                            navigation.navigate('QRPayment' as any)
                        }
                    })
                }
            </View>
        </Background>
    )
}

export default QRTransactions

const styles = StyleSheet.create({})