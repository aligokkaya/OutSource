import { faAngleRight, faBell, faClipboardUser, faCreditCard, faGlobe, faLock, faMessage, faUserGear,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
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
                    titleStyle={{ fontSize: 16 }}
                    leftonPress={() => props.navigation.goBack()}

                />

                <Container valueHeight={1.2}>
                    <ScrollView>
                        <View style={{ marginHorizontal: 15, marginTop: 50 }}>
                            <Text style={styles.title}>Profil</Text>
                            <View >
                                <View style={styles.containerChildView}>
                                    <FontAwesomeIcon icon={faClipboardUser} size={18} color="#3D21A2" />
                                    <View style={styles.textView}><Text style={styles.text}>Kişisel Bilgiler</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('PersonelInformation')}>
                                        <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View
                                style={styles.line}
                            />
                            <View >
                                <View style={styles.containerChildView}>
                                    <FontAwesomeIcon icon={faBell} size={18} color="#3D21A2" />
                                    <View style={styles.textView}><Text style={styles.text}>Bildirimler</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('NotificationSettings')}>
                                        <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View
                                style={styles.line}
                            />
                            <View >
                                <View style={styles.containerChildView}>
                                    <FontAwesomeIcon icon={faLock} size={18} color="#3D21A2" />
                                    <View style={styles.textView} ><Text style={styles.text}>Şifre Yenile</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('ResetPasswordStep1')}>
                                        <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View
                                style={styles.line}
                            />
                            <View >
                                <View style={styles.containerChildView}>
                                    <FontAwesomeIcon icon={faGlobe} size={18} color="#3D21A2" />
                                    <View style={styles.textView}><Text style={styles.text}> Dil Ayarla</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View
                                style={styles.line}
                            />
                            <Text style={[styles.title, { marginTop: 50 }]}>Hesaplar ve Kartlar</Text>
                            <View >
                                <View style={styles.containerChildView}>
                                    <FontAwesomeIcon icon={faUserGear} size={18} color="#3D21A2" />
                                    <View style={styles.textView}><Text style={styles.text}>Hesap Ayarları</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View
                                style={styles.line}
                            />
                            <View >
                                <View style={styles.containerChildView}>
                                    <FontAwesomeIcon icon={faCreditCard} size={18} color="#3D21A2" />
                                    <View style={styles.textView}><Text style={styles.text}>Kart Ayarları</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View
                                style={styles.line}
                            />
                            <Text style={[styles.title, { marginTop: 50 }]}>Mesajlaşma</Text>
                            <View >
                                <View style={styles.containerChildView}>
                                    <FontAwesomeIcon icon={faMessage} size={18} color="#3D21A2" />
                                    <View style={styles.textView}><Text style={styles.text}>Sohbet Ayarları</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View
                                style={[styles.line,{marginBottom:72}]}
                            />
                        </View>
                    </ScrollView>
                </Container>

            </SafeAreaView>
        </BackgroundContainer>
    )
}

const styles = StyleSheet.create({
    title: { fontWeight: '500', color: '#141414', marginBottom: 5, fontSize: 16 },
    text: { color: '#141414', textAlign: 'left', fontSize: 16, fontWeight: '400', marginLeft: 15 },
    line: {
        borderBottomWidth: 1,
        borderColor: '#E7E7E7',
        width: '87%',
        alignSelf: 'flex-end',
        height: 1,
    },
    textView: { textAlign: 'left', width: '80%', marginVertical: 15 },
    containerChildView: { flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'space-between', },

})