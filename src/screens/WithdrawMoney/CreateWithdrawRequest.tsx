import { Image, StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Option from '../../components/Option'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronLeft, faChevronRight, faInfoCircle, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button';
import CustomCheckbox from '../../components/CustomChecbox';
import FormElement from '../../components/FormElement';

import { useNavigation } from '@react-navigation/native';
import Background from '../SendMoney/Background';
import NewDropdown from '../Deposit/NewDropdown';

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

const CreateWithdrawRequest = () => {
  const navigation = useNavigation()
  const [isIban, setIsIban] = useState(true)

  return (
    <Background leftIcon={faChevronLeft} rightIcon={faInfoCircle} title='Para Çek'>
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

        <Text style={styles.title}>Hesap Bilgileri</Text>

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
              selected={isIban}
              onPress={
                () => setIsIban(true)
              } />
            <Text>Kayıtlı Hesaba</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10
          }}>
            <Option
              extraStyle={{ marginRight: 10 }}
              selected={!isIban}
              onPress={
                () => setIsIban(false)
              } />
            <Text>IBAN Numarasına</Text>
          </View>
        </View>

        {
          !isIban ? (
            <>
              <FormElement style={{
                marginTop: 25
              }}>
                <TextInput
                  placeholder='IBAN'
                  placeholderTextColor={"#B8B8B8"}
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color: '#141414',
                  }}
                />
              </FormElement>
              <FormElement>
                <TextInput
                  placeholder='Hesap Sahibinin Adı'
                  placeholderTextColor={"#B8B8B8"}
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color: '#141414'
                  }}
                />
              </FormElement>

              <CustomCheckbox
                style={{ marginTop: 20, marginBottom: 10 }}
                checkhed={true}
                text='Hesabı Kaydet'
              />
              <FormElement>
                <TextInput
                  placeholder='Kayıt İsmi'
                  placeholderTextColor={"#B8B8B8"}
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color: '#141414'
                  }}
                />
              </FormElement>
            </>
          ) : (
            <View style={{
              borderRadius: 10,
              alignSelf: 'stretch',
              borderColor: '#DED2FA',
              borderWidth: 1,
              paddingTop: 10,
              marginTop: 25,
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <View>
                  <Text style={{
                    fontSize: 11,
                    fontWeight: '500',
                    color: '#727272'
                  }}>PARANIN ÇEKİLECEĞİ HESAP</Text>
                  <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#141414',
                    marginTop: 6
                  }}>Maaş Hesabım</Text>
                </View>
                <FontAwesomeIcon icon={faChevronRight} color="#3D21A2" size={22} />
              </View>

              <View style={{
                backgroundColor: '#FAF6FE',
                paddingHorizontal: 10,
                paddingBottom: 10,
                marginTop: 20
              }}>
                <Text style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: '#141414',
                  fontWeight: '500'
                }}>
                  Garanti BBVA
                </Text>

                <View style={{
                  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                  marginTop: 6
                }}>
                  <View>
                    <Text style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#141414'
                    }}>TR55 0006 2000 1234 0006 1234 56</Text>
                    <Text style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#141414',
                      marginTop: 6
                    }}>239-6625123 Güzelyalı</Text>
                  </View>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 5
                    }}
                    source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLTfBJPk71bq3zo5sWfIkcQwZF4-KfjwmZViE7tDOgM=s900-c-k-c0x00ffffff-no-rj', }}
                  />
                </View>
              </View>
            </View>
          )
        }


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

        <CustomCheckbox
          style={{ marginTop: 30 }}
          checkhed={false}
          text='Bu transferi hızlı işlemlere kaydet.'
        />
        <Button
          invert
          onPress={() => {
            navigation.navigate('WithdrawVerify' as any)
          }}
          butonStyle={{
            marginVertical: 45
          }} title="Devam Et" />
      </ScrollView>
    </Background>
  );
};

export default CreateWithdrawRequest;

const styles = StyleSheet.create({
  title: {
    zIndex: -1,
    fontSize: 18,
    color: '#141414',
    fontWeight: '500',
    marginTop: 30
  }
});
