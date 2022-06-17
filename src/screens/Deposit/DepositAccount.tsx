import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button'
import Option from '../../components/Option'
import { useNavigation } from '@react-navigation/native'

const DepositAccount = () => {
    const [selected, setSelected] = React.useState(0)
    const navigation = useNavigation()

    const renderItem = ({ title, iban, address, selected, setSelected, index }: any) => (
        <View style={[{
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderWidth: 1,
            borderColor: '#DED2FA',
            marginBottom: 15,
            alignItems: 'center',
            flexDirection: 'row'
        }, selected && { borderColor: '#3D21A2', }]}>
            <Option
                selected={selected}
                onPress={
                    () => setSelected(index)
                } />
            <View>
                <Text style={{ fontSize: 14, color: '#141414', fontWeight: '500' }}>{title}</Text>
                <Text style={{ fontSize: 14, color: '#141414', fontWeight: '400', marginTop: 5 }}>{iban}</Text>
                <Text style={{ fontSize: 14, color: '#727272', fontWeight: '400', marginTop: 4 }}>{address}</Text>
            </View>
        </View>
    )

    return (
        <Background leftIcon={faChevronLeft} title='Paranın Çekileceği Hesap'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>
                <Text style={{
                    fontSize: 12,
                    color: '#141414',
                    fontWeight: '400',
                    marginTop: 20
                }}><Text style={{ fontWeight: '500' }}>2 Adet</Text> kayıtlı banka</Text>
                <Button icon={faPlus} iconProperty={{ color: '#3D21A2' } as any} title="Yeni Banka Kaydet" butonStyle={{ marginVertical: 15 }} />
                {
                    renderItem({
                        title: 'Garanti BBVA',
                        iban: 'TR55 0006 2000 1234 0006 1234 56',
                        address: '239-6625123 Güzelyalı',
                        selected: selected === 0,
                        setSelected,
                        index: 0
                    })
                }
                {
                    renderItem({
                        title: 'ING Bank',
                        iban: 'TR55 0006 2000 1234 0006 1234 56',
                        address: '239-6625123 Şişli',
                        selected: selected === 1,
                        setSelected,
                        index: 1
                    })
                }
                <View style={{ flex: 1 }} />
                <Button
                    onPress={() => {
                        navigation.navigate('DepositTargetAccount' as any)
                    }}
                    invert title="Hesap Seçimini Uygula" butonStyle={{ marginVertical: 45 }} />
            </View>
        </Background>
    )
}

export default DepositAccount

const styles = StyleSheet.create({})