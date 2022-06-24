import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Switch, TouchableOpacity } from "react-native";
import BackgroundContainer from "../../components/BackgroundContainer";
import Container from "../../components/Container";
import MainHeader from "../../components/MainHeader";

const NotificationSettings = (props: any) => {
    const [switchStatus, setSwitchStatus] = useState({
        switch1: false,
        switch2: false,
        switch3: false,
        switch4: false,
        switch5: false,
        switch6: false
    })
    return (
        <BackgroundContainer >
            <SafeAreaView>
                <MainHeader
                    bgHeader={false}
                    title='Bildirim Ayarları'
                    titleStyle={{ fontSize: 18 }}
                    leftonPress={() => props.navigation.goBack()}

                />
                <Container valueHeight={1}>
                    <View style={{ marginVertical: 20 }}>
                        <View>

                            <View style={styles.containerChildView}>
                                <View style={{ width: '80%' }}>
                                    <Text style={styles.text}>Para geldiğinde bildirim gönder</Text>
                                </View>
                                <Switch
                                    trackColor={{ false: "#ecf3f9", true: "#CDF8A8" }}
                                    thumbColor={switchStatus.switch1 ? "#46C01F" : "#B9B9B9"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch1: !switchStatus.switch1 }))}
                                    value={switchStatus.switch1}
                                />
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View >
                            <View style={styles.containerChildView}>
                                <View style={{ width: '80%' }}>
                                    <Text style={styles.text}>Para yatırma talebi sonuçlandığında bildirim gönder</Text>
                                </View>
                                <Switch
                                    trackColor={{ false: "#ecf3f9", true: "#CDF8A8" }}
                                    thumbColor={switchStatus.switch2 ? "#46C01F" : "#B9B9B9"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch2: !switchStatus.switch2 }))}
                                    value={switchStatus.switch2}
                                />
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View >
                            <View style={styles.containerChildView}>
                                <View style={{ width: '80%' }}>
                                    <Text style={styles.text}>Para yatırma talebi sonuçlandığında bildirim gönder</Text>
                                </View>
                                <Switch
                                    trackColor={{ false: "#ecf3f9", true: "#CDF8A8" }}
                                    thumbColor={switchStatus.switch3 ? "#46C01F" : "#B9B9B9"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch3: !switchStatus.switch3 }))}
                                    value={switchStatus.switch3}
                                />
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View >
                            <View style={styles.containerChildView}>
                                <View style={{ width: '80%' }}>
                                    <Text style={styles.text}>Para yatırma talebi sonuçlandığında bildirim gönder</Text>
                                </View>
                                <Switch
                                    trackColor={{ false: "#ecf3f9", true: "#CDF8A8" }}
                                    thumbColor={switchStatus.switch4 ? "#46C01F" : "#B9B9B9"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch4: !switchStatus.switch4 }))}
                                    value={switchStatus.switch4}
                                />
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View >
                            <View style={styles.containerChildView}>
                                <View style={{ width: '80%' }}>
                                    <Text style={styles.text}>Para yatırma talebi sonuçlandığında bildirim gönder</Text>
                                </View>
                                <Switch
                                    trackColor={{ false: "#ecf3f9", true: "#CDF8A8" }}
                                    thumbColor={switchStatus.switch5 ? "#46C01F" : "#B9B9B9"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch5: !switchStatus.switch5 }))}
                                    value={switchStatus.switch5}
                                />
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View >
                            <View style={styles.containerChildView}>
                                <View style={{ width: '80%' }}>
                                    <Text style={styles.text}>Para geldiğinde bildirim gönder</Text>
                                </View>
                                <Switch
                                    trackColor={{ false: "#ecf3f9", true: "#CDF8A8" }}
                                    thumbColor={switchStatus.switch6 ? "#46C01F" : "#B9B9B9"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch6: !switchStatus.switch6 }))}
                                    value={switchStatus.switch6}
                                />
                            </View>
                        </View>
                        <View style={styles.line} />
                    </View>
                    <View style={{flex:0.4}}/>
                    <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Değişiklikleri Kaydet</Text>
                            </TouchableOpacity>
                        </View>
                </Container>
            </SafeAreaView>
        </BackgroundContainer>
    )
}
const styles = StyleSheet.create({
    containerChildView: { flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 },
    line: {
        borderBottomWidth: 1,
        borderColor: '#ecf3f9',
        width: '100%',
        alignSelf: 'flex-end',
        height: 0,
    },
    text: { fontSize: 16, color: '#000', marginLeft: 5 },
    buttonView: { alignSelf: "center", width: '90%' },
    button: { backgroundColor: '#3A1BA3', borderRadius: 10, alignItems: 'center', justifyContent: 'center', height: 50, padding: 10 },
    buttonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' }
})
export default NotificationSettings