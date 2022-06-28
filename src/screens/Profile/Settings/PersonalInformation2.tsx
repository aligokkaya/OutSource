import React from "react";
import { SafeAreaView, StyleSheet, View, TextInput, Text, ScrollView } from "react-native";
import BackgroundContainer from "../../../components/BackgroundContainer";
import Container from "../../../components/Container";
import MainHeader from "../../../components/MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarMinus, faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import FormElement from "../../../components/FormElement";
import NewDropdown from "../../Deposit/NewDropdown";

const PersonelInformation2 = (props: any) => {
    return (
        <BackgroundContainer >
            <SafeAreaView>
                <ScrollView>
                    <MainHeader
                        bgHeader={false}
                        title='Kişisel Bilgiler'
                        titleStyle={{ fontSize: 16 }}
                        leftonPress={() => props.navigation.goBack()}

                    />
                    <Container valueHeight={0.7}>
                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center', }}>
                            < View style={{
                                borderRadius: 50,
                                height: 20, width: 20, justifyContent: 'center', alignItems: 'center',
                                borderWidth: 1, borderColor: '#fff', backgroundColor: '#48BF24'
                            }}>
                                <FontAwesomeIcon icon={faCheck} color="#fff" size={15} />
                            </View>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#48BF24', textAlign: 'center' }}>
                                Profil Doluluk Oranı(%100)</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FormElement style={{
                                flex: 1, flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                paddingTop: 5,

                            }}>
                                <Text style={{
                                    color: '#3D21A2',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    fontWeight: '400',
                                }}>Ad</Text>
                                <TextInput
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 16,
                                        fontWeight: '400',
                                        color: '#141414',
                                        padding: 0,
                                        margin: 0
                                    }}
                                    value='Cansu'
                                />
                            </FormElement>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FormElement style={{
                                flex: 1, flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                paddingTop: 5,

                            }}>
                                <Text style={{
                                    color: '#3D21A2',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    fontWeight: '400',
                                }}>Soyad</Text>
                                <TextInput
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 16,
                                        fontWeight: '400',
                                        color: '#141414',
                                        padding: 0,
                                        margin: 0
                                    }}
                                    value='Ural'
                                />
                            </FormElement>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FormElement style={{
                                flex: 1, flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                paddingTop: 5,

                            }}>
                                <Text style={{
                                    color: '#3D21A2',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    fontWeight: '400',
                                }}>E-Posta</Text>
                                <TextInput
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 16,
                                        fontWeight: '400',
                                        color: '#141414',
                                        padding: 0,
                                        margin: 0
                                    }}
                                    value='cansural@gmail.com'
                                />
                            </FormElement>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FormElement style={{
                                flex: 1, flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                paddingTop: 5,

                            }}>
                                <Text style={{
                                    color: '#3D21A2',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    fontWeight: '400',
                                }}>TC Kimlik No</Text>
                                <TextInput
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 16,
                                        fontWeight: '400',
                                        color: '#141414',
                                        padding: 0,
                                        margin: 0
                                    }}
                                    value='1234567890'
                                />
                            </FormElement>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FormElement style={{
                                flex: 1, flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                paddingTop: 5,

                            }}>
                                <Text style={{
                                    color: '#3D21A2',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    fontWeight: '400',
                                }}>Doğum Yılı</Text>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                    <TextInput
                                        style={{
                                            fontSize: 16,
                                            lineHeight: 16,
                                            fontWeight: '400',
                                            color: '#141414',
                                            padding: 0,
                                            margin: 0,
                                            width: '95%'
                                        }}
                                        value='10.10.1990'
                                    />
                                    <FontAwesomeIcon icon={faCalendarMinus} size={15} color={'#3D21A2'} style={{ alignSelf: 'center' }} />
                                </View>
                            </FormElement>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flexDirection: 'column',
                            }}>

                                <Text style={{
                                    color: '#3D21A2',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    fontWeight: '400',
                                    position: "absolute", paddingTop: 20, marginLeft: 15
                                }}>Meslek Grubu</Text>
                                <NewDropdown data={['aa']}>
                                    <Text style={{
                                        marginLeft: 5,
                                        fontSize: 16,
                                        fontWeight: '400',
                                        color: '#141414', width: '92%'
                                    }}>Bilgisayar Mühendisi</Text>
                                    <FontAwesomeIcon icon={faChevronDown} color="#3D21A2" size={12} style={{
                                        marginLeft: 8
                                    }} />
                                </NewDropdown>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 50 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#141414', textAlign: 'left' }}>Hesap Güvenliği</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flexDirection: 'column',
                            }}>

                                <Text style={{
                                    color: '#3D21A2',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    fontWeight: '400',
                                    position: "absolute", paddingTop: 20, marginLeft: 15
                                }}>Hesap Kurtarma Sorusu</Text>
                                <NewDropdown data={['aa']}>

                                    <Text style={{
                                        marginLeft: 5,
                                        fontSize: 16,
                                        fontWeight: '400',
                                        color: '#141414', width: '92%'
                                    }}>İlk evcil hayvanınızın adı nedir? </Text>
                                    <FontAwesomeIcon icon={faChevronDown} color="#3D21A2" size={12} style={{
                                        marginLeft: 8
                                    }} />
                                </NewDropdown>

                            </View>


                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                            <FormElement style={{
                                flex: 1, flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                paddingTop: 5,

                            }}>
                                <TextInput
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 16,
                                        fontWeight: '400',
                                        color: '#B8B8B8',
                                        padding: 0,
                                        margin: 0
                                    }}
                                    placeholder={'Hesap Kurtarma Sorusunun Cevabı'}
                                />
                            </FormElement>
                        </View>
                        <Button
                            invert
                            butonStyle={styles.secondButton} title="Değişiklikleri Kaydet" />
                        <Button
                            onPress={() => {
                            }}
                            butonStyle={styles.firstButton} title="Vazgeç" />

                    </Container>
                </ScrollView>
            </SafeAreaView>
        </BackgroundContainer>
    )
}
const styles = StyleSheet.create({
    firstButton: { marginTop: 5, marginBottom: 44, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    secondButton: { marginVertical: 15, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
})
export default PersonelInformation2