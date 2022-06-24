import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import BackgroundContainer from "../../../components/BackgroundContainer";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import MainHeader from "../../../components/MainHeader";

const ResetPasswordStep3 = (props: any) => {

    const [inputValue, setInputValue] = useState({
        passwordText: '',
        confirmPasswordText: ''
    })
    const [focus, setFocus] = useState({
        password: false,
        confirm: false
    })

    return (
        <BackgroundContainer >
            <SafeAreaView>
                <MainHeader
                    bgHeader={false}
                    title='Şifre Yenile'
                    titleStyle={{ fontSize: 18 }}
                    leftonPress={() => props.navigation.goBack()}

                />
                <Container valueHeight={1}>
                    <View style={{
                        alignSelf: 'stretch',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20
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
                        fontWeight: '500',
                        marginTop: 30,
                        color: '#141414',
                        fontSize: 16,
                        textAlign: "center"
                    }}>
                        Lütfen yeni şifrenizi giriniz.
                    </Text>
                    <View style={styles.viewInput}>
                        {focus.password ?
                            <Text style={styles.inputLabel}>Yeni Şifre</Text> : null}
                        <TextInput
                            style={[styles.input, { height: 50 }]}
                            onChangeText={text => setInputValue(prevState => ({ ...prevState, passwordText: text }))}
                            value={inputValue.passwordText}
                            placeholder="Yeni Şifre"
                            onFocus={() => setFocus(prevState => ({ ...prevState, password: true }))}
                            onBlur={() => setFocus(prevState => ({ ...prevState, password: false }))}
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Şifre Oluşturma kriterleri:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {inputValue.passwordText.length == 6 ? <View style={{
                                width: 20,
                                height: 20,
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: '#48BF24',
                                backgroundColor: '#48BF24',
                                marginRight: 5

                            }}>
                                <FontAwesomeIcon icon={faCheck} color="#fff" size={15} />
                            </View> : <View style={{ width: 8, height: 8, backgroundColor: '#000', borderRadius: 10, marginTop: 7,marginRight:2 }} />}
                            <Text style={[styles.text, { color: inputValue.passwordText.length == 6 ? '#48BF24' : '#000' }]}>
                                6 karakter
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 8, height: 8, backgroundColor: '#000', borderRadius: 10, marginTop: 7,marginRight:2 }} />
                            <Text style={styles.text}>
                                Yalnızca numerik karakterler
                            </Text>
                        </View>


                    </View>
                    <View style={styles.viewInput}>
                        {focus.confirm ?
                            <Text style={styles.inputLabel}>Yeni Şifre Tekrar</Text> : null}
                        <TextInput
                            style={[styles.input, { height: 50 }]}
                            onChangeText={text => setInputValue(prevState => ({ ...prevState, confirmPasswordText: text }))}
                            value={inputValue.confirmPasswordText}
                            placeholder="Yeni Şifre Tekrar"
                            keyboardType="numeric"
                            onFocus={() => setFocus(prevState => ({ ...prevState, confirm: true }))}
                            onBlur={() => setFocus(prevState => ({ ...prevState, confirm: false }))}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'stretch'
                    }}>
                        <Button
                            onPress={() => {
                            }}
                            butonStyle={{
                                flex: 1,
                                marginVertical: 30
                            }} title="Vazgeç" />
                        <Button
                            invert
                            butonStyle={{
                                flex: 1,
                                marginLeft: 15,
                                marginVertical: 30
                            }} title="Şifreyi Yenile" />
                    </View>
                </Container>
            </SafeAreaView>
        </BackgroundContainer>

    )
}

const styles = StyleSheet.create({
    inputLabel: { marginLeft: 10, fontSize: 12, color: '#380796' },
    input: { height: 40, fontSize: 14, marginHorizontal: 5, color: '#000' },
    viewInput: { width: '100%', borderRadius: 10, borderWidth: 0.5, borderColor: '#b9b9b9', marginTop: 15 },
    textView: { margin: 10 },
    text: { fontSize: 16, color: '#000' }
})

export default ResetPasswordStep3