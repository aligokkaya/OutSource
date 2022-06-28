import React from "react";
import { SafeAreaView, StyleSheet, View, TextInput, Text, ScrollView } from "react-native";
import BackgroundContainer from "../../../components/BackgroundContainer";
import Container from "../../../components/Container";
import MainHeader from "../../../components/MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faCalendarMinus, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SimpleGradientProgressbarView from "react-native-simple-gradient-progressbar-view";
import Button from "../../../components/Button";
import FormElement from "../../../components/FormElement";
import NewDropdown from "../../Deposit/NewDropdown";

const PersonelInformation = (props: any) => {
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
                        <View style={{ flexDirection: 'column', marginTop: 20 }}>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#141414', textAlign: 'center' }}>Profil Doluluk Oranı</Text>

                            <SimpleGradientProgressbarView
                                style={{
                                    backgroundColor: '#E7E7E7',
                                    height: 5,
                                    marginTop: 5,
                                    borderRadius: 8,
                                }}
                                fromColor="#00bed1"
                                toColor="#00bed1"
                                progress={0.9}
                                cornerRadius={1}
                            />
                            <Text style={{alignSelf:'flex-end',marginRight:33,fontSize:12,fontWeight:'500',color:'#141414'}}>%90</Text>
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
                                <TextInput
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 16,
                                        fontWeight: '400',
                                        color: '#B8B8B8',
                                        padding: 0,
                                        margin: 0
                                    }}
                                    placeholder={'TC Kimlik No'}
                                />
                            </FormElement>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FormElement style={{
                                flex: 1, flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                paddingTop: 5,
                            }}>
                                <TextInput
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 16,
                                        fontWeight: '400',
                                        color: '#B8B8B8',
                                        padding: 0,
                                        margin: 0,
                                        width: '95%', height: '90%',
                                    }}
                                    value='Doğum Yılı'
                                />
                                <FontAwesomeIcon icon={faCalendarMinus} size={15} color={'#3D21A2'} style={{ alignSelf: 'center' }} />

                            </FormElement>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <NewDropdown data={['aaa', 'bbb', 'ccc']}>
                                <>
                                    <Text style={{
                                        marginLeft: 5,
                                        fontSize: 16,
                                        fontWeight: '400',
                                        color: '#141414', width: '95%'
                                    }}>Meslek Grubu</Text>
                                    <FontAwesomeIcon icon={faChevronDown} color="#3D21A2" size={12} style={{
                                        marginLeft: 8
                                    }} />
                                </>
                            </NewDropdown>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 50 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#141414', textAlign: 'left' }}>Hesap Güvenliği</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <NewDropdown data={['aaa', 'bbb', 'ccc']}>
                                <>
                                    <Text style={{
                                        marginLeft: 5,
                                        fontSize: 16,
                                        fontWeight: '400',
                                        color: '#141414', width: '95%'
                                    }}>Hesap Kurtarma Sorusu</Text>
                                    <FontAwesomeIcon icon={faChevronDown} color="#3D21A2" size={12} style={{
                                        marginLeft: 8
                                    }} />
                                </>
                            </NewDropdown>
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
export default PersonelInformation