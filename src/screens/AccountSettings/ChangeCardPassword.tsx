import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Background from '../SendMoney/Background'
import { faChevronLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import CardBackground from './CardBackground'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { KeyCode } from '../SendMoney/KeyCode'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

const ChangeCardPassword = () => {
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} title='Kart Şifreni Değiştir'>
            <ScrollView style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                flex: 1,
            }}>
                <CardBackground
                    favoriteCard={false}
                    cardNumber='5121 **** **** 3060'
                    cardBalance={950}
                    width={Dimensions.get('window').width - 60}
                    style={{
                        alignSelf: 'center',
                        width: Dimensions.get('window').width - 60,
                        height: Dimensions.get('window').width * 0.55,
                        marginLeft: null,
                        zIndex: 2,
                        marginTop: 20,
                    }}
                    footerStyle={{
                        width: Dimensions.get('window').width - 70,
                        bottom: 10
                    }}
                />

                <View style={{
                    alignSelf: 'stretch',
                    borderRadius: 10,
                    backgroundColor: '#CAFCF0',
                    justifyContent: 'center',
                    padding: 15,
                    marginTop: 20,
                    flexDirection: 'row',
                }}>
                    <FontAwesomeIcon icon={faInfoCircle} color="#005078" size={20} />
                    <Text style={{
                        marginLeft: 7,
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#005078'
                    }}>
                        {'Şifreniz 4 rakamdan oluşmalıdır. Tekrar eden ya da ardışık rakamları ve müşteri numaranızı\nkullanmamanızı öneriririz.'}
                    </Text>
                </View>

                <Text style={{
                    marginVertical: 20,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Yeni Kart Şifresi</Text>
                <KeyCode
                    onChange={() => { }}
                    secureTextEntry={true}
                    value={'1234'}
                    length={4}
                    numeric
                />

                <Text style={{
                    marginVertical: 20,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414'
                }}>Yeni Kart Şifresi Tekrar</Text>
                <KeyCode
                    onChange={() => { }}
                    secureTextEntry
                    value={'1'}
                    length={4}
                    numeric
                />
                <Button
                    onPress={() => {
                        navigation.navigate('ChatSettings' as any)
                    }}
                    title='Şifrei Değiştir'
                    invert
                    butonStyle={{
                        marginTop: 54,
                        marginBottom: 44
                    }} />
            </ScrollView>
        </Background>
    )
}

export default ChangeCardPassword

const styles = StyleSheet.create({})