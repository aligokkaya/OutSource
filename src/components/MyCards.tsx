import React, { useState } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import CardBackground from '../screens/AccountSettings/CardBackground';

const MyCards = ({
    onlyBackground = false
}) => {
    console.log('--->', onlyBackground)
    const [currentIndex, setCurrentIndex] = useState(0);
    const dumpData = [{ id: 1, status: true }, { id: 2, status: false }];

    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ height: 200, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onScroll={(event) => {
                        setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / (Dimensions.get('screen').width - 120)));
                        console.log(event.nativeEvent.contentOffset.x / (Dimensions.get('window').width - 120 - 20));
                    }}
                    data={dumpData}
                    horizontal={true}
                    style={{ marginRight: 25 }}
                    bounces={false}
                    snapToInterval={Dimensions.get('screen').width}
                    renderItem={({ item }) => {
                        return <CardBackground
                            key={item.id}
                            favoriteCard={item.status}
                            cardNumber='5121 **** **** 3060'
                            cardBalance={900}
                            onlyBackground={onlyBackground}
                        />
                    }}
                />

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>
                {
                    dumpData.map((item, index) => {
                        return currentIndex === index ?
                            <View key={index} style={{ width: 20, height: 5, backgroundColor: '#fff', borderRadius: 5, marginRight: 5 }}></View>
                            :
                            <View key={index} style={{ width: 5, height: 5, backgroundColor: '#fff', borderRadius: 5, marginRight: 5 }}></View>
                    })
                }
            </View>
        </View>
    )
}

export default MyCards