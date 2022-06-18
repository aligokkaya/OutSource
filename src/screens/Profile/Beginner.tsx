import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { faGear, faCheck, faPen, faP, faStar, faAngleLeft, faAngleRight, faRightToBracket, faRightFromBracket, faBuildingColumns, faShield, faUsers, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import BackgroundContainer from '../../components/BackgroundContainer'
import MainHeader from '../../components/MainHeader'
import Container from '../../components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function Beginner(props: any) {
    return (
        <BackgroundContainer >
            <SafeAreaView>
                <MainHeader
                    bgHeader={false}
                    title='Profilim'
                    titleStyle={{ fontSize: 18 }}
                    leftonPress={() => props.navigation.goBack()}

                />
                <View style={styles.view}>
                    <View style={styles.subView}>
                        <View style={styles.firstCircleView}>
                            <Image source={require('../../../images/UserPhoto.png')} style={styles.userImage} />
                            < View style={styles.bannerIcon}>
                                <FontAwesomeIcon icon={faPen} color="#fff" size={12} />
                            </View>
                        </View>
                        <View style={styles.viewText}>
                            <Text style={styles.text}>Cansu Ural</Text>
                            <Text style={styles.childText}>Standart Hesap</Text>
                        </View>
                    </View>
                    <View style={styles.subView}>
                        <View style={styles.shadowView}>
                            <View style={{ width: 90, height: 90, borderColor: '#fff', borderRadius: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#380796' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: 40, height: 40, borderRadius: 20 }}>
                                    <FontAwesomeIcon icon={faStar} color="#380796" size={28} />
                                </View>
                                < View style={[styles.bannerIcon, {
                                    borderWidth: 2, borderColor: '#fff', backgroundColor: '#48BF24'
                                }]}>
                                    <FontAwesomeIcon icon={faCheck} color="#fff" size={14} />
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, marginLeft: 30 }}>
                            <View ><Text style={[styles.text, { alignSelf: 'center', marginTop: 0 }]}>Başlangıç</Text>
                                <Text style={styles.childText}>Papel Seviyesi</Text></View>
                            <FontAwesomeIcon icon={faAngleRight} color="#fff" size={25} style={{ marginLeft: 10 }} />
                        </View>
                    </View>
                </View>
                <Container valueHeight={1.8}>
                    <View style={{ marginVertical: 15 }}>
                        <View >
                            <View style={styles.containerChildView}>
                                <FontAwesomeIcon icon={faGear} size={30} color="#380796" />
                                <View style={{ width: '80%' }}><Text style={styles.titleText}>Ayarlar</Text>
                                    <Text style={styles.contentText}>Profil, şifre, kart, mesajlaşma, dil ve bildirim ayarları</Text></View>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Settings')
                                }>
                                    <FontAwesomeIcon icon={faAngleRight} size={30} color="#9a9a9a" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={styles.line}
                        />
                        <View >
                            <View style={{ flexDirection: 'row', height: 70, alignItems: 'center', justifyContent: 'space-between', }}>
                                <FontAwesomeIcon icon={faShield} size={30} color="#380796" />
                                <View style={{ width: '80%' }}><Text style={styles.titleText}>Yasal Limitler</Text>
                                    <Text style={styles.contentText}>Yasal limitleri ve hesap türünü güncelleme işlemleri</Text></View>
                                <TouchableOpacity onPress={() => console.log("Yasal Limitler")
                                }>
                                    <FontAwesomeIcon icon={faAngleRight} size={30} color="#9a9a9a" />

                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={styles.line}
                        />
                        <View >
                            <View style={styles.containerChildView}>
                                <FontAwesomeIcon icon={faBuildingColumns} size={30} color="#380796" />
                                <View style={{ width: '80%' }}><Text style={styles.titleText}>Banka Hesapları</Text>
                                    <Text style={styles.contentText}>Kayıtlı banka hesapları ile ilgili işlemler</Text></View>
                                <TouchableOpacity onPress={() => console.log("Banka Hesapları")
                                }>
                                    <FontAwesomeIcon icon={faAngleRight} size={30} color="#9a9a9a" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View
                            style={styles.line}
                        />

                        <View >
                            <View style={styles.containerChildView}>
                                <FontAwesomeIcon icon={faUserGroup} size={30} color="#380796" />
                                <View style={{ width: '80%' }}><Text style={styles.titleText}>Kayıtlı Kişilerim</Text>
                                    <Text style={styles.contentText}>Kayıtlı banka hesapları ile ilgili işlemler</Text></View>
                                <TouchableOpacity onPress={() => console.log("kayıtlı kişilerim")
                                }>
                                    <FontAwesomeIcon icon={faAngleRight} size={30} color="#9a9a9a" />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.line}
                        />

                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Advanced')} style={styles.logoutButton}>
                        <FontAwesomeIcon icon={faRightFromBracket} color='#d93d3d' size={30} />
                        <Text style={styles.logoutText}>Çıkış Yap</Text>
                    </TouchableOpacity>
                </Container>
            </SafeAreaView>
        </BackgroundContainer >
    )
}

const styles = StyleSheet.create({
    titleText: { fontSize: 16, fontWeight: 'bold', color: '#000' },
    contentText: { color: '#9a9a9a', fontSize: 14, marginVertical: 5 },
    line: {
        borderBottomWidth: 1,
        borderColor: '#ecf3f9',
        width: '90%',
        alignSelf: 'flex-end',
        height: 0,
        marginVertical: 5
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
        width: 100, height: 100, alignItems: 'center', justifyContent: "center", borderRadius: 50, shadowColor: "",
        shadowOffset: {
            width: 0,
            height: 70,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    text: { marginTop: 10, alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 'bold', color: '#fff' },
    childText: { fontSize: 14, color: '#fff', marginTop: 2 },
    viewText: { marginTop: 10, alignItems: 'center', justifyContent: 'center' },
    userImage: { width: 85, height: 85, alignSelf: 'center' },
    firstCircleView: { width: 90, height: 90, borderColor: '#fff', borderRadius: 50, borderWidth: 2 },
    subView: { backgroundColor: '#8F84C0', width: 175, height: 180, borderRadius: 15, margin: 10, alignItems: 'center', justifyContent: 'center', },
    view: { flexDirection: 'row', marginBottom: 10, alignItems: 'center', justifyContent: 'center' },
    containerChildView: { flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'space-between', },
    logoutText: { color: '#d93d3d', fontSize: 18, marginLeft: 10, fontWeight: 'bold' },
    logoutButton: { width: 200, alignItems: "center", justifyContent: "center", flexDirection: "row", alignSelf: 'center' },
})