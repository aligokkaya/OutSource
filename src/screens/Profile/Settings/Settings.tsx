import { faAngleRight, faBell, faBuildingColumns, faClipboardUser, faCreditCard, faGear, faGlobe, faLock, faMessage, faShield, faUserGear, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BackgroundContainer from '../../../components/BackgroundContainer'
import Container from '../../../components/Container'
import MainHeader from '../../../components/MainHeader'



export default function Settings(props: any) {
    return (
        <BackgroundContainer >
            <SafeAreaView>
                <MainHeader
                    bgHeader={false}
                    title='Ayarlar'
                    titleStyle={{ fontSize: 18 }}
                    leftonPress={() => props.navigation.goBack()}

                />

                <Container valueHeight={1}>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.title}>Profil</Text>
                        <View >
                            <View style={styles.containerChildView}>
                                <FontAwesomeIcon icon={faClipboardUser} size={26} color="#380796" />
                                <View style={styles.textView}><Text style={styles.text}>Kişisel Bilgiler</Text>
                                </View>
                                <TouchableOpacity onPress={()=>props.navigation.navigate('PersonelInformation')}>
                                    <FontAwesomeIcon icon={faAngleRight} size={24} color="#9a9a9a" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={styles.line}
                        />
                        <View >
                            <View style={styles.containerChildView}>
                                <FontAwesomeIcon icon={faBell} size={26} color="#380796" />
                                <View style={styles.textView}><Text style={styles.text}>Bildirimler</Text>
                                </View>
                                <TouchableOpacity onPress={()=>props.navigation.navigate('NotificationSettings')}>
                                    <FontAwesomeIcon icon={faAngleRight} size={24} color="#9a9a9a" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={styles.line}
                        />
                        <View >
                            <View style={styles.containerChildView}>
                                <FontAwesomeIcon icon={faLock} size={26} color="#380796" />
                                <View style={styles.textView} ><Text style={styles.text}>Şifre Yenile</Text>
                                </View>
                                <TouchableOpacity onPress={()=>props.navigation.navigate('ResetPasswordStep1')}>
                                    <FontAwesomeIcon icon={faAngleRight} size={24} color="#9a9a9a" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={styles.line}
                        />
                        <View >
                            <View style={styles.containerChildView}>
                                <FontAwesomeIcon icon={faGlobe} size={26} color="#380796" />
                                <View style={styles.textView}><Text style={styles.text}> Dil Ayarla</Text>
                                </View>
                                <TouchableOpacity>
                                    <FontAwesomeIcon icon={faAngleRight} size={24} color="#9a9a9a" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={styles.line}
                        />
                        <Text style={[styles.title, { marginTop: 20 }]}>Hesaplar ve Kartlar</Text>
                        <View >
                            <View style={styles.containerChildView}>
                                <FontAwesomeIcon icon={faUserGear} size={26} color="#380796" />
                                <View style={styles.textView}><Text style={styles.text}>Hesap Ayarları</Text>
                                </View>
                                <TouchableOpacity>
                                    <FontAwesomeIcon icon={faAngleRight} size={24} color="#9a9a9a" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={styles.line}
                        />
                        <View >
                            <View style={styles.containerChildView}>
                                <FontAwesomeIcon icon={faCreditCard} size={26} color="#380796" />
                                <View style={styles.textView}><Text style={styles.text}>Kart Ayarları</Text>
                                </View>
                                <TouchableOpacity>
                                    <FontAwesomeIcon icon={faAngleRight} size={24} color="#9a9a9a" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={styles.line}
                        />
                        <Text style={[styles.title, { marginTop: 20 }]}>Mesajlaşma</Text>
                        <View >
                            <View style={styles.containerChildView}>
                                <FontAwesomeIcon icon={faMessage} size={26} color="#380796" />
                                <View style={styles.textView}><Text style={styles.text}>Sohbet Ayarları</Text>
                                </View>
                                <TouchableOpacity>
                                    <FontAwesomeIcon icon={faAngleRight} size={24} color="#9a9a9a" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={styles.line}
                        />
                    </View>
                </Container>

            </SafeAreaView>
        </BackgroundContainer>
    )
}

const styles = StyleSheet.create({
    title: { fontWeight: 'bold', color: '#000', marginBottom: 10, fontSize: 20 },
    text: { color: '#000', marginLeft: 10, fontSize: 16 },
    line: {
        borderBottomWidth: 1,
        borderColor: '#ecf3f9',
        width: '90%',
        alignSelf: 'flex-end',
        height: 0,
    },
    textView: { textAlign: 'left', width: '80%' },
    containerChildView: { flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'space-between', },

})