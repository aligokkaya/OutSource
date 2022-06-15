import { Image, StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Option from '../../components/Option'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronLeft, faInfoCircle, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import Background from './Background';

const persons = [
  {
    image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj',
    name: 'İlknur Yaman'
  }, {
    image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj',
    name: 'Hakan Aktaş'
  }, {
    image: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRZCrC6D4VJ7i9siNsEgnFAkXRMXUE7jtafq4m-f1e7ub1C-AGpFodNbw9c-5sj-guj',
    name: 'Hakan Demir'
  }
]

const SendMoney = () => {
  const navigation = useNavigation()
  const [isPhone, setIsPhone] = useState(true)

  return (
    <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Gönder'>
      <ScrollView style={{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            alignSelf: 'stretch',
            marginTop: 25,
            flexGrow: 0
          }}>
          <View style={{
            width: 32,
            height: 32,
            borderRadius: 32,
            backgroundColor: '#FAF6FE',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FontAwesomeIcon icon={faSearch} color="#3A1BA3" size={15} />
          </View>
          {
            persons.map((item, index) => (
              <View style={{
                backgroundColor: '#FAF6FE',
                height: 32,
                borderRadius: 32,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 15
              }}>
                <Image
                  source={{ uri: item.image }}
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
                }}>{item.name}</Text>
              </View>
            ))
          }
        </ScrollView>

        <Text style={styles.title}>Kayıtlı Olmayan Gönderici</Text>

        <View style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 15,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Option
              extraStyle={{ marginRight: 10 }}
              selected={isPhone}
              onPress={
                () => setIsPhone(true)
              } />
            <Text>Telefon Numarası</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10
          }}>
            <Option
              extraStyle={{ marginRight: 10 }}
              selected={!isPhone}
              onPress={
                () => setIsPhone(false)
              } />
            <Text>Müşteri Numarası</Text>
          </View>
        </View>

        {
          !isPhone ? (
            <FormElement>
              <TextInput
                placeholder='Müşteri Numarası'
                placeholderTextColor={"#B8B8B8"}
                style={{
                  flex: 1,
                  fontSize: 16,
                  color: '#141414'
                }}
              />
            </FormElement>
          ) : (
            <View style={{
              flexDirection: 'row'
            }}>
              <FormElement>
                <Image style={{
                  width: 28,
                  height: 28,
                  borderRadius: 28,
                  backgroundColor: 'red'
                }} />
                <Text style={{
                  marginLeft: 5,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#141414'
                }}>+90</Text>

                <FontAwesomeIcon icon={faChevronDown} color="#3D21A2" size={15} style={{
                  marginLeft: 8
                }} />
              </FormElement>

              <FormElement style={{
                marginLeft: 15, flex: 1, flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingTop: 5
              }}>
                <Text style={{
                  color: '#3D21A2',
                  fontSize: 12,
                  lineHeight: 12,
                  fontWeight: '500',
                }}>Telefon Numarası</Text>
                <TextInput
                  style={{
                    fontSize: 17,
                    lineHeight: 17,
                    fontWeight: '500',
                    color: '#141414',
                    padding: 0,
                    margin: 0
                  }}
                  value='(5__) ___ __ __'
                />
              </FormElement>
            </View>
          )
        }


        <Button butonStyle={{
          marginTop: 20
        }} title="Sorgula" />


        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 30
        }}>
          <Text style={[styles.title, { marginTop: null }]}>Tutar Bilgileri</Text>
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


        <FormElement style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
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
        </FormElement>

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
          style={{ marginTop: 30 }}
          text='Bu transferi hızlı işlemlere kaydet.'
        />
        <Button
          invert
          onPress={() => {
            navigation.navigate('SendMoneySelected')
          }}
          butonStyle={{
            marginVertical: 45
          }} title="Devam Et" />
      </ScrollView>
    </Background>
  );
};

export default SendMoney;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#141414',
    fontWeight: '500',
    marginTop: 30
  }
});
