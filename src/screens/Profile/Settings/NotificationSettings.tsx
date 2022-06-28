import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Switch } from "react-native";
import BackgroundContainer from "../../../components/BackgroundContainer";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import MainHeader from "../../../components/MainHeader";

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
                    titleStyle={{ fontSize: 16 }}
                    leftonPress={() => props.navigation.goBack()}

                />
                <Container valueHeight={1.2}>
                    <ScrollView>
                        <View style={[styles.containerChildView, { marginTop: 10 }]}>
                            <Text style={styles.text}>Para geldiğinde bildirim gönder</Text>
                            <Switch
                                trackColor={{ false: "#f3f3f3", true: "#CCF8A7" }}
                                thumbColor={switchStatus.switch1 ? "#48BF24" : "#b8b8b8"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch1: !switchStatus.switch1 }))}
                                value={switchStatus.switch1}
                            />
                        </View>
                        <View style={styles.line} />
                        <View style={styles.containerChildView}>
                            <Text style={styles.text}>Para yatırma talebi sonuçlandığında bildirim gönder</Text>
                            <Switch
                                trackColor={{ false: "#f3f3f3", true: "#CCF8A7" }}
                                thumbColor={switchStatus.switch2 ? "#48BF24" : "#b8b8b8"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch2: !switchStatus.switch2 }))}
                                value={switchStatus.switch2}
                            />
                        </View>
                        <View style={styles.line} />
                        <View style={styles.containerChildView}>
                            <Text style={styles.text}>Para yatırma talebi sonuçlandığında bildirim gönder</Text>
                            <Switch
                                trackColor={{ false: "#f3f3f3", true: "#CCF8A7" }}
                                thumbColor={switchStatus.switch3 ? "#48BF24" : "#b8b8b8"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch3: !switchStatus.switch3 }))}
                                value={switchStatus.switch3}
                            />
                        </View>
                        <View style={styles.line} />
                        <View style={styles.containerChildView}>
                            <Text style={styles.text}>Para yatırma talebi sonuçlandığında bildirim gönder</Text>
                            <Switch
                                trackColor={{ false: "#f3f3f3", true: "#CCF8A7" }}
                                thumbColor={switchStatus.switch4 ? "#48BF24" : "#b8b8b8"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch4: !switchStatus.switch4 }))}
                                value={switchStatus.switch4}
                            />
                        </View>
                        <View style={styles.line} />
                        <View style={styles.containerChildView}>
                            <Text style={styles.text}>Para yatırma talebi sonuçlandığında bildirim gönder</Text>
                            <Switch
                                trackColor={{ false: "#f3f3f3", true: "#CCF8A7" }}
                                thumbColor={switchStatus.switch5 ? "#48BF24" : "#b8b8b8"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch5: !switchStatus.switch5 }))}
                                value={switchStatus.switch5}
                            />
                        </View>
                        <View style={styles.line} />
                        <View style={styles.containerChildView}>
                            <Text style={styles.text}>Para geldiğinde bildirim gönder</Text>
                            <Switch
                                trackColor={{ false: "#f3f3f3", true: "#CCF8A7" }}
                                thumbColor={switchStatus.switch6 ? "#48BF24" : "#b8b8b8"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setSwitchStatus(prevState => ({ ...prevState, switch6: !switchStatus.switch6 }))}
                                value={switchStatus.switch6}
                            />
                        </View>
                        <View style={styles.line} />
                        <Button
                            invert
                            butonStyle={styles.button} title="Değişiklikleri Kaydet" />
                    </ScrollView>
                </Container>
            </SafeAreaView>
        </BackgroundContainer>
    )
}
const styles = StyleSheet.create({
    containerChildView: { flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15 },
    line: {
        borderBottomWidth: 1,
        borderColor: '#e7e7e7',
        width: '90%',
        alignSelf: 'center',
        height: 0,
    },
    text: { fontSize: 16, color: '#141414', marginLeft: 5, fontWeight: '400', textAlign: 'left' },
    button: { borderRadius: 10, alignItems: 'center', justifyContent: 'center', height: 50, marginTop: 250, marginBottom: 44 },
})
export default NotificationSettings