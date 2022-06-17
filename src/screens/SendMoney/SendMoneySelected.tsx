import { Image, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronLeft, faInfoCircle, faPerson } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import Background from './Background';
import NewDropdown from '../Deposit/NewDropdown';

const SendMoneySelected = () => {
  const navigation = useNavigation()

  return (
    <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Gönder'>
      <ScrollView style={{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
      }}>
        <View style={{
          alignSelf: 'stretch',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20
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
            }}>İşlem Bilgiler</Text>
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
        </View>
        <Text style={styles.title}>Kayıtlı Kişilerim</Text>

        <View style={{
          marginTop: 25,
          backgroundColor: '#FAF6FE',
          height: 32,
          alignSelf: 'flex-start',
          borderRadius: 32,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image
            source={{ uri: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj' }}
            style={{
              width: 32,
              height: 32,
              borderRadius: 32,
            }} />
          <Text style={{
            fontSize: 14,
            marginHorizontal: 10,
            color: '#141414',
            fontWeight: '500'
          }}>{'İlknur Yaman'}</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 30
        }}>
          <Text style={[styles.title, { marginTop: null as any }]}>Tutar Bilgileri</Text>
          <View style={{
            backgroundColor: '#E8FBD2',
            height: 25,
            borderRadius: 5,
            paddingHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{
              color: '#086100',
              fontSize: 12,
              fontWeight: '400'
            }}>Toplam Limit: 1.500 TL</Text>
          </View>
        </View>


        <NewDropdown data={['TRY', 'USD', 'EUR']} elementStyle={{
          flex: 1,
          alignItems: 'center', justifyContent: 'flex-start'
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{
              fontSize: 16,
              color: '#141414',
              fontWeight: '400'
            }}>TRY</Text>

            <FontAwesomeIcon icon={faChevronDown} color="#3D21A2" size={15} style={{
              marginLeft: 8
            }} />

            <View style={{ width: 1, height: 30, backgroundColor: '#E7E7E7', marginHorizontal: 15 }} />
          </View>
          <View style={{
            transform: [{
              translateY: 4
            }]
          }}>
            <Text style={{
              color: '#3D21A2',
              fontSize: 12,
              lineHeight: 12,
              fontWeight: '500',
            }}>Tutar</Text>
            <TextInput
              style={{
                fontSize: 17,
                lineHeight: 17,
                fontWeight: '500',
                color: '#141414',
                padding: 0,
                margin: 0
              }}
              value='890.00'
            />
          </View>
        </NewDropdown>

        <Text style={styles.title}>Açıklama</Text>

        <FormElement>
          <>
            <TextInput
              placeholder='Metin Girin (Opsiyonel)'
              placeholderTextColor={"#B8B8B8"}
              style={{
                flex: 1,
                fontSize: 16,
                color: '#141414'
              }}
            />
            <Text style={{
              fontSize: 14,
              color: '#727272'
            }}>0/52</Text>
          </>
        </FormElement>

        <CustomCheckbox
          checkhed
          style={{ marginTop: 30 }}
          text='Bu transferi hızlı işlemlere kaydet.'
        />

        <FormElement>
          <TextInput
            placeholder='Hızlı İşlem İsmi (Örn:Anneme para gönder)'
            placeholderTextColor={"#B8B8B8"}
            style={{
              flex: 1,
              fontSize: 16,
              color: '#141414'
            }}
          />
        </FormElement>

        <Button
          invert
          onPress={() => {
            navigation.navigate('SendMoneyFilled' as any)
          }}
          butonStyle={{
            marginVertical: 45
          }} title="Devam Et" />
      </ScrollView>
    </Background>
  );
};

export default SendMoneySelected;

const styles = StyleSheet.create({
  title: {
    zIndex: -1,
    fontSize: 18,
    color: '#141414',
    fontWeight: '500',
    marginTop: 30
  }
});
