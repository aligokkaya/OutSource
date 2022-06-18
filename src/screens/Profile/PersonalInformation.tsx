import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import BackgroundContainer from "../../components/BackgroundContainer";
import Container from "../../components/Container";
import MainHeader from "../../components/MainHeader";

const PersonelInformation = (props: any) => {

    return (
        <BackgroundContainer >
            <SafeAreaView>
                <MainHeader
                    bgHeader={false}
                    title='Kişisel Bilgiler'
                    titleStyle={{ fontSize: 18 }}
                    leftonPress={() => props.navigation.goBack()}

                />
                <Container valueHeight={1}>
                         
                </Container>
            </SafeAreaView>
        </BackgroundContainer>
    )
}
const styles = StyleSheet.create({
})
export default PersonelInformation