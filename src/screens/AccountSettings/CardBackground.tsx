import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardBackground = (props: {
    cardNumber?: string,
    cardBalance?: number,
    favoriteCard?: boolean,
    onlyBackground?: boolean,
    style?: any,
    width?: any,
    height?: any,
    footerStyle?: any
}) => {
    return (
        <ImageBackground source={require('../../../images/Bank.png')} resizeMode="contain"
            style={[
                {
                    height: props.height || 200,
                    width: props.width || Dimensions.get('screen').width - 120,
                    marginLeft: 25,
                    zIndex: 2
                },
                props.style
            ]}>
            {
                !props.onlyBackground && (
                    <>
                        {
                            props.favoriteCard &&
                            <View style={styles.favoriteCard}>
                                <Text style={styles.favoriteCardText}>Favori Kartım</Text>
                            </View>
                        }
                        <View style={[
                            styles.cardFooterInfo,
                            props.footerStyle
                        ]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.cardTitle}>Favori Kartım</Text>
                                <Text style={styles.cardBalance}>₺{props.cardBalance?.toFixed(2).replace('.', ',')}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <Text style={styles.cardNumber}>{props.cardNumber}</Text>
                                <Text style={styles.cardNumber}>Toplam Limit</Text>
                            </View>
                        </View>
                    </>
                )
            }
        </ImageBackground>
    )
}

export default CardBackground

const styles = StyleSheet.create({
    cardFooterInfo: {
        height: 70,
        padding: 10,
        position: 'absolute', bottom: 20,
        width: Dimensions.get('screen').width - 120,
        backgroundColor: '#FFF7E6',
        left: 5, right: 5,
        borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
        flexDirection: 'column',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#141414',
    },
    cardBalance: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#141414',
    },
    cardNumber: {
        fontSize: 14,
        fontWeight: '400',
        color: '#727272',
    },
    favoriteCard: {
        backgroundColor: '#02BDD0',
        paddingLeft: 10, paddingRight: 10,
        position: 'absolute',
        right: 10, top: 25,
        borderRadius: 13, height: 30,
        justifyContent: 'center', alignItems: 'center'
    },
    favoriteCardText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    }
})