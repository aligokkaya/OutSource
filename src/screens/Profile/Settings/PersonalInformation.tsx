import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import BackgroundContainer from "../../../components/BackgroundContainer";
import Container from "../../../components/Container";
import MainHeader from "../../../components/MainHeader";
import DatePicker from 'react-native-date-picker'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarDays, faCheck } from "@fortawesome/free-solid-svg-icons";
import dayjs from 'dayjs'
import { Dropdown } from 'react-native-element-dropdown';
import SimpleGradientProgressbarView from "react-native-simple-gradient-progressbar-view";
import Button from "../../../components/Button";

const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


const selectorData = [
    {
        id: 1,
        label: 'Bilgisayar Mühendisliği',
        value: 'Bilgisayar mühendisliği'
    },
    {
        id: 2,
        label: 'Elektrik Mühendisliği',
        value: 'Elektrik mühendisliği'
    },
    {
        id: 3,
        label: 'Makine Mühendisliği',
        value: 'Makine mühendisliği'
    }
]
const questionData = [
    {
        id: 1,
        label: 'İlk evcil hayvanınızın adı nedir?',
        value: 'animal name'
    },
    {
        id: 2,
        label: 'İlkokul öğretmeninizin adı nedir?',
        value: 'teacher name'
    },
]

type input = {
    name: string
    surname: string
    email: string
    identityNo: string,
    date: Date,
    job: string
    answer: string
    question: string
    count: number
}

const PersonelInformation = (props: any) => {
    const [open, setOpen] = React.useState(false)
    const [isFocus, setIsFocus] = React.useState({
        job: false,
        question: false,
        name: false,
        surname: false,
        mail: false,
        identityNo: false,
        bDate: false
    })
    const [inputValue, setInputValue] = React.useState<input>({
        name: '',
        surname: '',
        email: '',
        identityNo: '',
        date: new Date(),
        job: '',
        answer: '',
        question: '',
        count: 0
    });
    React.useEffect(() => {
        if (inputValue.job && inputValue.question && inputValue.date) {
            setInputValue(prevState => ({ ...prevState, count: inputValue.count + 0.5 }))
        }
    }, [inputValue.job, inputValue.date, inputValue.question])


    return (
        <BackgroundContainer >
            <SafeAreaView>
                <ScrollView>
                    <MainHeader
                        bgHeader={false}
                        title='Kişisel Bilgiler'
                        titleStyle={{ fontSize: 18 }}
                        leftonPress={() => props.navigation.goBack()}

                    />
                    <Container valueHeight={0.8}>
                        <View>
                            {inputValue.count < 1 ?
                                <View>
                                    <Text style={styles.progressText}>Profil Doluluk Oranı</Text>
                                    <SimpleGradientProgressbarView
                                        style={{
                                            backgroundColor: '#E7E7E7',
                                            height: 5,
                                            marginTop: 15,
                                            marginBottom: 10,
                                            borderRadius: 10,
                                        }}
                                        fromColor="#00BED1"
                                        toColor="#00BED1"
                                        progress={inputValue.count}
                                        cornerRadius={10}
                                    />
                                    {inputValue.count > 0 ? <View style={styles.progress}>
                                        <Text style={{
                                            alignSelf: inputValue.count == 0 ?
                                                "flex-start" : inputValue.count == 0.5 ?
                                                    "center" : inputValue.count == 1 ? "flex-end" : "baseline",
                                            fontSize: 16, color: '#000', fontWeight: 'bold'
                                        }}>%{(inputValue.count * 100)}</Text>
                                    </View> : null}
                                </View>
                                : <View style={styles.view}>
                                    < View style={styles.icon}>
                                        <FontAwesomeIcon icon={faCheck} color="#fff" size={14} />
                                    </View>
                                    <Text style={styles.progressText2}>Profil Doluluk Oranı (%{100})</Text>
                                </View>
                            }
                        </View>
                        <View style={styles.viewInput}>
                            {isFocus.name ? <Text style={styles.inputLabel}>Ad</Text> : null}
                            <TextInput
                                style={styles.input}
                                onChangeText={text => setInputValue(prevState => ({ ...prevState, name: text }))}
                                value={inputValue.name}
                                onFocus={() => setIsFocus(prevState => ({ ...prevState, name: true }))}
                                onBlur={() => setIsFocus(prevState => ({ ...prevState, name: false }))}
                                placeholder="Adınız"
                                onEndEditing={() =>
                                    setInputValue(prevState => ({ ...prevState, count: inputValue.count + 0.1 }))
                                }

                            />
                        </View>
                        <View style={styles.viewInput}>
                            {isFocus.surname ? <Text style={styles.inputLabel}>Soyad</Text> : null}
                            <TextInput
                                style={styles.input}
                                onChangeText={text => setInputValue(prevState => ({ ...prevState, surname: text }))}
                                value={inputValue.surname}
                                onFocus={() => setIsFocus(prevState => ({ ...prevState, surname: true }))}
                                onBlur={() => setIsFocus(prevState => ({ ...prevState, surname: false }))}
                                placeholder="Soyadınız"
                                onEndEditing={() =>
                                    setInputValue(prevState => ({ ...prevState, count: inputValue.count + 0.1 }))
                                }
                            />
                        </View>
                        <View style={styles.viewInput}>
                            {isFocus.mail ? <Text style={styles.inputLabel}>E-posta</Text> : null}
                            <TextInput
                                style={styles.input}
                                onChangeText={text => setInputValue(prevState => ({ ...prevState, email: text }))}
                                value={inputValue.email}
                                onFocus={() => setIsFocus(prevState => ({ ...prevState, mail: true }))}
                                onBlur={() => setIsFocus(prevState => ({ ...prevState, mail: false }))}
                                keyboardType={'email-address'}
                                placeholder="E-Posta"
                                onEndEditing={() =>
                                    setInputValue(prevState => ({ ...prevState, count: inputValue.count + 0.1 }))
                                }
                            />
                        </View>
                        <View style={styles.viewInput}>
                            {isFocus.identityNo ? <Text style={styles.inputLabel}>TC Kimlik No</Text> : null}
                            <TextInput
                                style={styles.input}
                                onChangeText={text => setInputValue(prevState => ({ ...prevState, identityNo: text }))}
                                value={inputValue.identityNo}
                                keyboardType={'numeric'}
                                onFocus={() => setIsFocus(prevState => ({ ...prevState, identityNo: true }))}
                                onBlur={() => setIsFocus(prevState => ({ ...prevState, identityNo: false }))}
                                placeholder="TC Kimlik Numarası"
                                onEndEditing={() =>
                                    setInputValue(prevState => ({ ...prevState, count: inputValue.count + 0.1 }))
                                }
                            />
                        </View>
                        <View style={styles.viewInput}>
                            {inputValue.date ? <Text style={styles.inputLabel}>Doğum Yılı</Text> : null}
                            <View style={styles.rowView}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={text => setInputValue(prevState => ({ ...prevState, identityNo: text }))}
                                    value={dayjs(inputValue.date).format('DD.MM.YYYY')}
                                    placeholder="Doğum Tarihi"
                                    editable={false}
                                    onFocus={() => setIsFocus(prevState => ({ ...prevState, bDate: true }))}
                                    onBlur={() => setIsFocus(prevState => ({ ...prevState, bDate: false }))}
                                    onEndEditing={() =>
                                        setInputValue(prevState => ({ ...prevState, count: inputValue.count + 0.1 }))
                                    } />
                                <TouchableOpacity onPress={() => {
                                    setOpen(true)
                                }}>
                                    <FontAwesomeIcon icon={faCalendarDays} color='#380796' size={26} />
                                </TouchableOpacity>
                            </View>
                            <DatePicker
                                modal={true}
                                open={open}
                                date={inputValue.date}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setInputValue((prevState: any) => ({
                                        ...prevState,
                                        date: date
                                    }))
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                                title={'Doğum Tarihi'}
                                locale={'tr'}
                                mode={'date'}
                                confirmText={'Seç'}
                                cancelText={'İptal'}
                            />

                        </View>
                        <View style={styles.viewInput}>
                            {inputValue.job ? <Text style={styles.inputLabel}>Meslek Grubu</Text> : null}
                            <Dropdown
                                style={[styles.dropDown, isFocus.job && { borderColor: '#380796' }]}
                                iconStyle={styles.iconMargin}
                                data={selectorData}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Meslek Grubu"
                                value={inputValue.job}
                                onFocus={() => setIsFocus(prevState => ({ ...prevState, job: true }))}
                                onBlur={() => setIsFocus(prevState => ({ ...prevState, job: false }))}
                                onChange={(item) => {
                                    setInputValue(prevState => ({
                                        ...prevState,
                                        job: item.value,
                                    }));
                                    setIsFocus(prevState => ({ ...prevState, job: false }))
                                }}
                            />
                        </View>
                        <Text style={styles.text}>Hesap Güvenliği</Text>
                        <View style={styles.viewInput}>
                            {inputValue.question ? <Text style={styles.inputLabel}>Hesap Kurtarma Sorusu</Text> : null}
                            <Dropdown
                                style={[styles.dropDown, isFocus.question && { borderColor: '#380796' }]}
                                iconStyle={styles.iconMargin}
                                data={questionData}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Hesap Kurtarma Sorusu"
                                value={inputValue.question}
                                onFocus={() => setIsFocus(prevState => ({ ...prevState, question: true }))}
                                onBlur={() => setIsFocus(prevState => ({ ...prevState, question: false }))}
                                onChange={(item) => {
                                    setInputValue(prevState => ({
                                        ...prevState,
                                        question: item.value,
                                    }));
                                    setIsFocus(prevState => ({ ...prevState, question: false }))
                                }}
                            />
                        </View>
                        {inputValue.question ?
                            <View style={styles.viewInput}>
                                <TextInput
                                    style={[styles.input, { height: 50 }]}
                                    onChangeText={text => setInputValue(prevState => ({ ...prevState, answer: text }))}
                                    value={inputValue.answer}
                                    onEndEditing={() =>
                                        setInputValue(prevState => ({ ...prevState, count: inputValue.count + 0.1 }))
                                    }
                                    placeholder="Hesap Kurtarma Sorusunun Cevabı"
                                />
                            </View> : null}
                        {/* <TouchableOpacity style={styles.firstButton}>
                            <Text style={styles.firstButtonText}>Değişiklikleri Kaydet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondButton}>
                            <Text style={styles.secondButtonText}>Vazgeç</Text>
                        </TouchableOpacity> */}

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
    inputLabel: { marginLeft: 10, fontSize: 14, color: '#380796' },
    input: { height: 40, fontSize: 14, marginHorizontal: 5, color: '#000' },
    viewInput: { width: '100%', borderRadius: 10, borderWidth: 0.5, borderColor: '#b9b9b9', marginVertical: 5 },
    rowView: { flexDirection: 'row', justifyContent: "space-between", paddingRight: 7, alignItems: 'center' },
    dropDown: { marginHorizontal: 5, fontSize: 14 },
    text: { fontSize: 16, color: '#000', fontWeight: 'bold', marginBottom: 10, marginTop: 20 },
    iconMargin: { marginRight: 5 },
    firstButton: { marginTop: 5, marginBottom: 15, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    secondButton: { marginVertical: 15, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    progressText: { fontSize: 16, color: '#000', fontWeight: 'bold', marginBottom: 10, marginTop: 20, alignSelf: 'center' },
    progress: { width: 40, height: 20 },
    progressText2: { fontSize: 16, color: '#48BF24', fontWeight: 'bold', marginHorizontal: 5 },
    view: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 },
    icon: {
        borderRadius: 100,
        height: 25, width: 25, justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#48BF24'
    }
})
export default PersonelInformation