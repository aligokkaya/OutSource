import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { faChevronLeft, faChevronRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Background from '../SendMoney/Background'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import DoubleButtonContainer from '../../components/DoubleButtonContainer'
import { useNavigation } from '@react-navigation/native'

const DepositSelectBank = () => {
    const [selectedMenu, setSelectedMenu] = React.useState(0)
    const navigation = useNavigation()

    return (
        <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Yatır'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
            }}>

                <DoubleButtonContainer
                    style={{ marginVertical: 30 }}
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    option1Text={'HAVALE / EFT ile'}
                    option2Text={'Kart ile'}
                />

                <Text style={styles.title}>Banka Seçimi</Text>

                <FlatList
                    data={Array.from({ length: 20 }).fill({
                        logo: 'https://yt3.ggpht.com/ytc/AKedOLTfBJPk71bq3zo5sWfIkcQwZF4-KfjwmZViE7tDOgM=s900-c-k-c0x00ffffff-no-rj',
                        title: 'Garanti BBVA'
                    })}
                    renderItem={({ item }: any) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('BankInformation' as any)
                            }}
                            style={{
                                flexDirection: 'row', alignItems: 'center', paddingVertical: 15,
                                borderBottomWidth: 1,
                                borderBottomColor: '#E7E7E7'
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <Image style={{
                                    width: 35,
                                    height: 35
                                }} source={{ uri: item.logo }} />
                                <Text style={{
                                    marginLeft: 5,
                                    fontSize: 16,
                                    fontWeight: '500',
                                    color: '#727272'
                                }}>{item.title}</Text>
                            </View>
                            <FontAwesomeIcon icon={faChevronRight} color="#E7E7E7" size={18} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </Background>
    )
}

export default DepositSelectBank

const styles = StyleSheet.create({
    title: { zIndex : -1,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500',
    }
})