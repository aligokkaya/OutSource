import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../SendMoney/Background'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
// @ts-ignore
import { RNHoleView } from 'react-native-hole-view';

const QRRequestScan = () => {
    const navigation = useNavigation()
    const [cameraHeight, setCameraHeight] = React.useState<number>(0)
    const [success, setSuccess] = React.useState(true)

    const hole = {
        x: (Dimensions.get('window').width - (Dimensions.get('window').width / 1.7)) / 2,
        y: (cameraHeight - Dimensions.get('window').width / 1.7) / 2,
        width: Dimensions.get('window').width / 1.7,
        height: Dimensions.get('window').width / 1.7
    }

    const corner = ({ style }: any) => (
        <View style={style}>
            <View style={{
                width: 32,
                height: 5,
                backgroundColor: success ? '#46C01F' : 'white'
            }} />
            <View style={{
                transform: [{
                    translateY: -5
                }],
                width: 5,
                height: 32,
                backgroundColor: success ? '#46C01F' : 'white'
            }} />
        </View>
    )

    return (
        <Background
            leftIcon={faChevronLeft}
            title='QR ile Para Talep Et'>
            <ImageBackground
                source={{
                    uri: 'https://w0.peakpx.com/wallpaper/737/229/HD-wallpaper-room-window-chair-sofa.jpg'
                }}
                onLayout={(e) => {
                    setCameraHeight(e.nativeEvent.layout.height)
                }}
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    alignSelf: 'stretch',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    overflow: 'hidden',
                    alignItems: 'center',
                }}>
                <View style={{
                    position: 'absolute',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    marginTop: 40,
                    zIndex: 2
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#141414',
                        textAlign: 'center',
                    }}>{'Para gönderilecek kişinin QR kodunu\nkameranızla okutunuz.'}</Text>
                </View>

                {
                    Boolean(cameraHeight) && (
                        <>
                            <RNHoleView
                                onTouchEnd={() => {
                                    navigation.navigate('QRRequestScanned' as any)
                                }}
                                style={{
                                    flex: 1,
                                    alignSelf: 'stretch',
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                holes={[hole]}>
                            </RNHoleView>
                            <View style={{
                                position: 'absolute',
                                width: hole.width + 40,
                                height: hole.height + 40,
                                left: hole.x - 20,
                                top: hole.y - 20
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    {corner({})}
                                    {corner({ style: { transform: [{ rotateZ: '90deg' }] } })}
                                </View>
                                <View style={{ flex: 1 }} />
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    transform: [{
                                        translateX: 2.5
                                    }]
                                }}>
                                    {corner({ style: { transform: [{ rotateZ: '270deg' }] } })}
                                    {corner({ style: { transform: [{ rotateZ: '180deg' }] } })}
                                </View>
                            </View>
                        </>
                    )
                }
            </ImageBackground>
        </Background>
    )
}

export default QRRequestScan

const styles = StyleSheet.create({})