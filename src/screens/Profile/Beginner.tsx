import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { faGear, faCheck, faPen, faStar, faAngleRight, faRightFromBracket, faBuildingColumns, faShield, faUserGroup, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BackgroundContainer from '../../components/BackgroundContainer'
import MainHeader from '../../components/MainHeader'
import Container from '../../components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'

export default function Beginner(props: any) {
    return (
        <BackgroundContainer >
            <SafeAreaView>
                <MainHeader
                    bgHeader={false}
                    title='Profilim'
                    titleStyle={{ fontSize: 16 }}
                    leftonPress={() => props.navigation.goBack()}

                />
                <View style={styles.view}>
                    <View style={{ marginLeft: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            locations={[0, 0.5, 1]}
                            colors={['#3D21A2', '#968DCD', '#8176C3']} style={{
                                width: 165,
                                height: 178,
                                borderRadius: 10,
                            }}
                        >
                            <View style={styles.firstCircleView}>
                                <Image source={require('../../../images/UserPhoto.png')} style={styles.userImage} />
                                < View style={styles.bannerIcon}>
                                    <FontAwesomeIcon icon={faPen} color="#fff" size={12} />
                                </View>
                            </View>
                            <View style={[styles.viewText, { marginTop: 13 }]}>
                                <Text style={styles.text}>Cansu Ural</Text>
                                <Text style={styles.childText}>Standart Hesap</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ marginHorizontal: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            locations={[0, 0.5, 1]}
                            colors={['#3D21A2', '#968DCD', '#8176C3']} style={{
                                width: 165,
                                height: 178,
                                borderRadius: 10,
                            }}
                        >
                            <View style={styles.shadowView}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0, 0.9, 0]}
                                    colors={['#3D21A2', '#968DCD', '#8176C3']} style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40,
                                    }}
                                >
                                    <View style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000000' }}>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 40, height: 40, borderRadius: 20 }}>
                                            <FontAwesomeIcon icon={faStar} color="#380796" size={33} />
                                        </View>
                                        < View style={[styles.bannerIcon, {
                                            borderWidth: 2, borderColor: '#fff', backgroundColor: '#48BF24'
                                        }]}>
                                            <FontAwesomeIcon icon={faCheck} color="#fff" size={21} />
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 10, marginHorizontal: 15, alignSelf: 'flex-end' }}>
                                <View style={{ marginRight: 12 }} >
                                    <Text style={[styles.text, { alignSelf: 'center', marginTop: 0 }]}>Başlangıç</Text>
                                    <Text style={styles.childText}>Papel Seviyesi</Text>
                                </View>
                                <FontAwesomeIcon icon={faAngleRight} color="#fff" size={15} />
                            </View>
                        </LinearGradient>
                    </View>
                </View>
                <Container valueHeight={2}>
                    <ScrollView>
                    <View style={[styles.containerChildView, { marginTop: 17 }]}>
                        <FontAwesomeIcon icon={faGear} size={18} color="#3D21A2" />
                        <View style={{ marginHorizontal: 22, alignItems: 'flex-start', justifyContent: 'flex-start' }}><Text style={styles.titleText}>Ayarlar</Text>
                            <Text style={styles.contentText}>Profil, şifre, kart, mesajlaşma, dil ve bildirim ayarları</Text></View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')
                        }>
                            <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={styles.line}
                    />
                    <View >
                        <View style={styles.containerChildView}>
                            <FontAwesomeIcon icon={faShield} size={20} color="#3D21A2" />
                            <FontAwesomeIcon icon={faMagnifyingGlass} size={11} color="#fff" style={{ position: 'absolute', left: 5, alignSelf: 'center' }} />
                            <View style={{ marginHorizontal: 22, alignItems: 'flex-start', justifyContent: 'flex-start' }}><Text style={styles.titleText}>Yasal Limitler</Text>
                                <Text style={styles.contentText}>Yasal limitleri ve hesap türünü güncelleme işlemleri</Text></View>
                            <TouchableOpacity onPress={() => console.log("Yasal Limitler")
                            }>
                                <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />

                            </TouchableOpacity>
                        </View>

                    </View>
                    <View
                        style={styles.line}
                    />
                    <View >
                        <View style={styles.containerChildView}>
                            <FontAwesomeIcon icon={faBuildingColumns} size={19} color="#3D21A2" />
                            <View style={{ marginHorizontal: 22, alignItems: 'flex-start', justifyContent: 'flex-start' }}><Text style={styles.titleText}>Banka Hesapları</Text>
                                <Text style={styles.contentText}>Kayıtlı banka hesapları ile ilgili işlemler</Text></View>
                            <TouchableOpacity onPress={() => console.log("Banka Hesapları")
                            }>
                                <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View
                        style={styles.line}
                    />

                    <View >
                        <View style={styles.containerChildView}>
                            <FontAwesomeIcon icon={faUserGroup} size={20} color="#3D21A2" />
                            <View style={{ marginHorizontal: 22, alignItems: 'flex-start', justifyContent: 'flex-start' }}><Text style={styles.titleText}>Kayıtlı Kişilerim</Text>
                                <Text style={styles.contentText}>Kayıtlı banka hesapları ile ilgili işlemler</Text></View>
                            <TouchableOpacity onPress={() => console.log("kayıtlı kişilerim")
                            }>
                                <FontAwesomeIcon icon={faAngleRight} size={14} color="#e7e7e7" />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.line}
                    />

                    <TouchableOpacity onPress={() => props.navigation.navigate('Advanced')} style={styles.logoutButton}>
                        <FontAwesomeIcon icon={faRightFromBracket} color='#D63333' size={16} />
                        <Text style={styles.logoutText}>Çıkış Yap</Text>
                    </TouchableOpacity>
                    </ScrollView>
                </Container>
            </SafeAreaView>
        </BackgroundContainer >
    )
}

const styles = StyleSheet.create({
    titleText: { fontSize: 16, fontWeight: '500', color: '#141414', textAlign: 'left' },
    contentText: { color: '#727272', fontSize: 12, marginBottom: 14, marginTop: 5, fontWeight: '400', textAlign: 'left' },
    line: {
        borderBottomWidth: 1,
        borderColor: '#e7e7e7',
        width: 308,
        alignSelf: 'flex-end',
        height: 0,
    },
    bannerIcon: {
        position: 'absolute',
        right: 0,
        bottom: -2,
        borderRadius: 100,
        height: 30, width: 30, justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#380796',
    },
    shadowView: {
        width: 85, height: 85, alignItems: 'center', justifyContent: "center", borderRadius: 100, shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 70,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,

        elevation: 1,
        alignSelf: 'center',
        marginTop: 25
    },
    text: { alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: '500', color: '#fff' },
    childText: { fontSize: 12, color: '#fff', marginTop: 5, fontWeight: '400' },
    viewText: { marginTop: 10, alignItems: 'center', justifyContent: 'center' },
    userImage: { width: 75, height: 75, alignSelf: 'center' },
    firstCircleView: { width: 80, height: 80, borderColor: '#fff', borderRadius: 50, borderWidth: 2, alignSelf: 'center', marginTop: 27 },
    view: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 25 },
    containerChildView: { flexDirection: 'row', height: 83, alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15, },
    logoutText: { color: '#d63333', fontSize: 14, marginLeft: 10, fontWeight: '500' },
    logoutButton: { width: 200, alignItems: "center", justifyContent: "center", flexDirection: "row", alignSelf: 'center',marginVertical:72 },
})