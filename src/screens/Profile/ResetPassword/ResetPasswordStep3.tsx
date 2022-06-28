import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import BackgroundContainer from "../../../components/BackgroundContainer";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import FormElement from "../../../components/FormElement";
import MainHeader from "../../../components/MainHeader";

const ResetPasswordStep3 = (props: any) => {

    return (
        <BackgroundContainer >
            <SafeAreaView>
                <MainHeader
                    bgHeader={false}
                    title='Şifre Yenile'
                    titleStyle={{ fontSize: 16 }}
                    leftonPress={() => props.navigation.goBack()}

                />
                <Container valueHeight={1}>
                    <View style={{
                        alignSelf: 'stretch',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 30
                    }}>
                        <View style={{
                            alignSelf: 'stretch',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 5
                        }}>

                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1.5,
                                backgroundColor: '#249ED4',
                                borderColor: '#249ED4'
                            }}>
                                <FontAwesomeIcon icon={faCheck} color="white" size={14} />
                            </View>
                        </View>
                        <View style={{
                            height: 3,
                            width: 15,
                            backgroundColor: '#F3F3F3',
                            marginHorizontal: 6
                        }} />
                        <View style={{
                            alignSelf: 'stretch',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 5
                        }}>

                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1.5,
                                backgroundColor: '#249ED4',
                                borderColor: '#249ED4'
                            }}>
                                <FontAwesomeIcon icon={faCheck} color="white" size={14} />
                            </View>
                        </View>
                        <View style={{
                            height: 3,
                            width: 15,
                            backgroundColor: '#F3F3F3',
                            marginHorizontal: 6
                        }} />
                        <View style={{
                            paddingHorizontal: 15,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 30,
                            borderWidth: 1.5,
                            borderColor: '#00BED1',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: '#00BED1'
                            }}>Yeni Şifre</Text>
                        </View>
                    </View>

                    <Text style={{
                        alignSelf: 'center',
                        fontWeight: '400',
                        marginTop: 30,
                        marginBottom:20,
                        color: '#141414',
                        fontSize: 14,
                        textAlign: "center",
                        marginHorizontal: 15
                    }}>
                        Lütfen yeni şifrenizi giriniz.
                    </Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
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
                            }}>Yeni Şifre</Text>
                            <TextInput
                                style={{
                                    fontSize: 16,
                                    lineHeight: 16,
                                    fontWeight: '400',
                                    color: '#141414',
                                    padding: 0,
                                    margin: 0
                                }}
                                value='*****'
                            />
                        </FormElement>

                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Şifre Oluşturma kriterleri:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                width: 16,
                                height: 16,
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: '#48BF24',
                                backgroundColor: '#48BF24',
                                marginRight: 5, marginTop: 7

                            }}>
                                <FontAwesomeIcon icon={faCheck} color="#fff" size={13} />
                            </View>
                            <Text style={[styles.text, { color: '#48BF24' ,marginTop:5}]}>
                                6 karakter
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 7, height: 7, backgroundColor: '#727272', borderRadius: 10, marginTop: 9, marginRight: 2 }} />
                            <Text style={[styles.text, { color: '#727272' }]}>
                                Yalnızca numerik karakterler
                            </Text>
                        </View>


                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
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
                                value='Yeni Şifre Tekrar'
                            />
                        </FormElement>

                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'stretch', marginTop: 15,marginHorizontal:15

                    }}>
                        <Button
                            onPress={() => {
                            }}
                            butonStyle={{
                                flex: 1,
                            }} title="Vazgeç" />
                        <Button
                            invert
                            butonStyle={{
                                flex: 1,
                                marginLeft: 15,
                            }} title="Şifreyi Yenile" />
                    </View>
                </Container>
            </SafeAreaView>
        </BackgroundContainer>

    )
}

const styles = StyleSheet.create({
    textView: { marginHorizontal: 15, marginTop: 20 },
    text: { fontSize: 14, color: '#141414', fontWeight: '400',marginVertical:2 }
})

export default ResetPasswordStep3