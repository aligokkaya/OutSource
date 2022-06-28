import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import BackgroundContainer from "../../../components/BackgroundContainer";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import FormElement from "../../../components/FormElement";
import MainHeader from "../../../components/MainHeader";

const ResetPasswordStep2 = (props: any) => {
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
                            }}>Hesap Kurtarma Sorusu</Text>
                        </View>

                        <View style={{
                            height: 3,
                            width: 15,
                            backgroundColor: '#F3F3F3',
                            marginHorizontal: 6
                        }} />
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1.5,
                            backgroundColor: '#F3F3F3',
                            borderColor: '#F3F3F3'
                        }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: '#C8C8C8',
                            }}>3</Text>
                        </View>
                    </View>

                    <Text style={{
                        alignSelf: 'center',
                        fontWeight: '400',
                        marginTop: 30,
                        color: '#141414',
                        fontSize: 14,
                        textAlign: "center",
                        marginHorizontal:15
                    }}>
                        Belirlemiş olduğunuz hesap kurtarma sorusunun cevabını giriniz.
                    </Text>
                    <Text style={{
                        marginVertical: 50,
                        alignSelf: 'center',
                        fontWeight: '500',
                        fontSize: 16,
                        color: '#141414',
                        marginHorizontal:15
                    }}>İlk evcil hayvanınızın adı nedir?</Text>
                    <View style={{ flexDirection: 'row',marginHorizontal:15 }}>
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
                                }}>Hesap Kurtarma Sorusunun Cevabı</Text>
                                <TextInput
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 16,
                                        fontWeight: '400',
                                        color: '#141414',
                                        padding: 0,
                                        margin: 0
                                    }}
                                    value='Zeytin'
                                />
                            </FormElement>

                        </View>
                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'stretch',
                        marginTop:25,marginHorizontal:15
                    }}>
                        <Button
                            onPress={() => {
                            }}
                            butonStyle={{
                                flex: 1,
                            }} title="Vazgeç" />
                        <Button
                            invert
                            onPress={() => {
                                props.navigation.navigate('ResetPasswordStep3' as any)
                            }}
                            butonStyle={{
                                flex: 1,
                                marginLeft: 15,
                            }} title="Devam Et" />
                    </View>
                </Container>
            </SafeAreaView>
        </BackgroundContainer>

    )
}

const styles = StyleSheet.create({
    inputLabel: { marginLeft: 10, fontSize: 12, color: '#380796' },
    input: { height: 40, fontSize: 14, marginHorizontal: 5, color: '#000' },
    viewInput: { width: '100%', borderRadius: 10, borderWidth: 0.5, borderColor: '#b9b9b9', marginTop: 30 },
})

export default ResetPasswordStep2