import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button'
import Option from '../../components/Option'
import { useNavigation } from '@react-navigation/native'

const DepositTargetAccount = () => {
    const [selected, setSelected] = React.useState(0)
    const navigation = useNavigation()

    const renderItem = ({ title, limit, pnr, selected, setSelected, index }: any) => (
        <View style={[{
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderWidth: 1,
            borderColor: '#DED2FA',
            marginTop: 15,
            alignItems: 'center',
            flexDirection: 'row'
        }, selected && { borderColor: '#3D21A2', }]}>
            <Option
                selected={selected}
                onPress={
                    () => setSelected(index)
                } />
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, color: '#141414', fontWeight: '500' }}>{title}</Text>
                    <Text style={{ fontSize: 14, color: '#727272', fontWeight: '400', marginLeft: 5 }}>{pnr}</Text>
                </View>
                <Text style={{ fontSize: 14, color: '#141414', fontWeight: '400', marginTop: 5 }}>{limit}</Text>
            </View>
        </View>
    )

    return (
        <Background leftIcon={faChevronLeft} title='Paranın Yatıralacağı Hesap'>
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
                }}><Text style={{ fontWeight: '500' }}>3 Adet</Text> hesap listeleniyor.</Text>
                {
                    renderItem({
                        title: 'Garanti BBVA',
                        limit: 'Limit: ₺150,90',
                        pnr: 'PNR: 12345678',
                        selected: selected === 0,
                        setSelected,
                        index: 0
                    })
                }
                {
                    renderItem({
                        title: 'Indira Shree',
                        limit: 'Limit: ₺150,90',
                        pnr: 'PNR: 12345678',
                        selected: selected === 1,
                        setSelected,
                        index: 1
                    })
                }
                {
                    renderItem({
                        title: 'Francisco Maia',
                        limit: 'Limit: ₺150,90',
                        pnr: 'PNR: 12345678',
                        selected: selected === 2,
                        setSelected,
                        index: 2
                    })
                }
                <View style={{ flex: 1 }} />
                <Button
                    onPress={() => {
                        navigation.navigate('DepositSummary' as any)
                    }}
                    invert title="Hesap Seçimini Uygula" butonStyle={{ marginVertical: 45 }} />
            </View>
        </Background>
    )
}

export default DepositTargetAccount

const styles = StyleSheet.create({})