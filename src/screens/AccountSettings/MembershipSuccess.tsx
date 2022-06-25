import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

const MembershipSuccess = () => {
    const navigation = useNavigation()

    return (
        <Background title='Üyeliğini Doğrula'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <View style={{ flex: 1 }} />
                <FontAwesomeIcon icon={faCircleCheck} color="#48BF24" size={Dimensions.get('window').width / 6} style={{
                    alignSelf: 'center',
                }} />
                <Text style={{
                    marginTop: 20,
                    fontSize: 20,
                    fontWeight: '400',
                    color: '#121212',
                    alignSelf: 'center',
                    paddingHorizontal: 15
                }}>Tebrikler, Üyeliğin Doğrulandı!</Text>
                <Text style={{
                    marginTop: 15,
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#727272',
                    alignSelf: 'center',
                    textAlign: 'center',
                    paddingHorizontal: 15
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
                <View style={{ flex: 1.2 }} />
                <Image
                    style={{
                        width: Dimensions.get('window').width / 3.75,
                        height: Dimensions.get('window').width / 3.75,
                        borderRadius: Dimensions.get('window').width / 3.75,
                        alignSelf: 'center'
                    }}
                    source={{
                        uri: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000',
                    }}
                />
                <Text style={{
                    marginTop: 5,
                    fontSize: 20,
                    fontWeight: '500',
                    color: '#121212',
                    alignSelf: 'center'
                }}>Cansu Ural</Text>
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 6.5
                }}>
                    <FontAwesomeIcon icon={faCircleCheck} color="#48BF24" size={15} />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#48BF24',
                        marginLeft: 5
                    }}>Onaylı Üyelik</Text>
                </View>
                <View style={{ flex: 1 }} />
                <Button
                    onPress={() => {
                        navigation.navigate('SavedBankAccounts' as any)
                    }}
                    invert title='Limitlerini Gör' />
                <Button
                    onPress={() => {
                        navigation.navigate('SavedBankAccounts' as any)
                    }}
                    butonStyle={{
                        marginTop: 15
                    }} title='Profilime Dön' />
                <Button
                    onPress={() => {
                        navigation.navigate('SavedBankAccounts' as any)
                    }}
                    butonStyle={{
                        marginTop: 15,
                        marginBottom: 44
                    }} title='Ana Sayfaya Dön' />
            </View>
        </Background>
    )
}

export default MembershipSuccess

const styles = StyleSheet.create({})