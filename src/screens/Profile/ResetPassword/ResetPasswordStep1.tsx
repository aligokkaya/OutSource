import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import BackgroundContainer from "../../../components/BackgroundContainer";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import MainHeader from "../../../components/MainHeader";
import { KeyCode } from "../../SendMoney/KeyCode";

const ResetPasswordStep1 = (props: any) => {

    const [value, setValue] = React.useState('')
    
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
                        marginTop: 30,
                    }}>
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
                            }}>SMS Doğrula</Text>
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
                            }}>2</Text>
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
                    <View style={{
                    marginTop: 25,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft:15
                    }}>
                        <CircularProgress
                            value={25}
                            radius={15}
                            activeStrokeWidth={4}
                            inActiveStrokeWidth={4}
                            activeStrokeColor={'#00BED1'}
                            inActiveStrokeColor={'#E8E8E8'}
                            progressValueColor={'transparent'}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{
                                color: '#141414',
                                fontSize: 14,
                                fontWeight:'400'
                            }}>Kalan süre</Text>
                            <Text style={{
                                color: '#141414',
                                fontSize: 14,
                                fontWeight: '500'
                            }}>182 saniye</Text>
                        </View>
                    </View>
                    <Text style={{
                        fontSize: 16,
                        color: '#B8B8B8',
                        fontWeight: '500',
                        marginRight:14
                    }}>Tekrar Gönder</Text>
                </View>
                <Text style={{
                    marginTop: 30,
                    alignSelf: 'center',
                    fontWeight: '500',
                    fontSize: 16,
                    color: '#141414'
                }}>0 (530) 123 45 67</Text>
                <Text style={{
                    alignSelf: 'center',
                    fontWeight: '400',
                    marginTop: 5,
                    color: '#141414',
                    fontSize:14
                }}>
                    numaralı telefonunuza gelen SMS kodunu giriniz.
                </Text>
                <View style={{
                    alignSelf: 'center',
                    marginTop: 30
                }}>
                    <KeyCode
                        value={'1'}
                        onChange={setValue}
                        length={6}
                        autoFocus
                        numeric
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'stretch',
                    marginTop:48,marginHorizontal:15
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
                           props.navigation.navigate('ResetPasswordStep2' as any)
                        }}
                        butonStyle={{
                            flex: 1,
                            marginLeft: 15,
                        }} title="Kodu Doğrula" />
                </View>
                </Container>
            </SafeAreaView>
        </BackgroundContainer>

    )
}

export default ResetPasswordStep1