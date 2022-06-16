import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronRight, faChevronLeft, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'

const YourQR = () => {
    const navigation = useNavigation()

    return (
        <Background
            leftIcon={faChevronLeft}
            title='QR Kodun'>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                alignSelf: 'stretch',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                alignItems: 'center'
            }}>
                <Image
                    source={{ uri: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000' }}
                    style={{
                        width: 90,
                        height: 90,
                        borderRadius: 90,
                        marginTop: 40
                    }}
                />
                <Text style={{
                    marginTop: 5,
                    fontSize: 20,
                    fontWeight: '500',
                    color: '#141414',
                }}>Cansu Ural</Text>

                <Image
                    source={{ uri: 'https://camo.githubusercontent.com/b3d16054a93792fe16adf774ac468bf4387e9adf/687474703a2f2f676f71722e6d652f5f5265736f75726365732f50657273697374656e742f633531653963623934633663336539353335343263373634626239376130653163663033336361332f7172636f64652d6c6f676f2d64657369676e2d737461726275636b732e706e67' }}
                    style={{
                        width: Dimensions.get('window').width / 2,
                        height: Dimensions.get('window').width / 2,
                        marginTop: 40
                    }}
                />

                <View style={{
                    marginTop: 35,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#3D21A2',
                        marginRight: 5
                    }}>1234 5678 90</Text>
                    <FontAwesomeIcon icon={faCopy} color="#3D21A2" size={18} />
                </View>
                <View style={{ flex: 1 }} />
                <Button butonStyle={{ alignSelf: 'stretch' }} title="Paylaş" invert />
                <Button butonStyle={{ alignSelf: 'stretch', marginTop: 15, marginBottom: 44 }} title="Galeriye Kaydet" />
            </View>
        </Background>
    )
}

export default YourQR

const styles = StyleSheet.create({})