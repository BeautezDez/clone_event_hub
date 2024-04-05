import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../../styles/globalStyle'
import { SpaceComponent } from '../../component'
import Swiper from 'react-native-swiper'
import { appColors } from '../../constants/appColor'
import { appInfos } from '../../constants/appInfos'

const OnBoardingScreen = ({ navigation }: any) => {

  const [index, setindex] = useState(0)

  return (
    <View style={[globalStyle.container]}>
      <Swiper style={[]}
        loop={false}
        onIndexChanged={num => setindex(num)}
        index={index}
        activeDotColor={appColors.white}
        dotColor={appColors.gray}>
        <View>
          <SpaceComponent height={65} />
          <Image style={[globalStyle.smallcard]} source={require('../../assets/image/Onboard1.png')} />
          <View style={[globalStyle.onboardswipe]}>
            <Text style={styles.headertext}>
              Khám phá những sự kiện sắp tới
            </Text>
            <Text style={styles.contenttext}>
              Zảo Chang Hảo
              Trung Gúa
              Xiên Chai
              Gua Zẩu
              Píng Chi-Linh
              Gúa Hấn
              Xí Goàn
              Ping Chi-Linh
            </Text>

          </View>
        </View>
        <View>
          <SpaceComponent height={65} />
          <Image style={[globalStyle.smallcard]} source={require('../../assets/image/Onboard2.png')} />
          <View style={[globalStyle.onboardswipe]}>
            <Text style={styles.headertext}>
              Khám phá những sự kiện sắp tới
            </Text>
            <Text style={styles.contenttext}>
              Zảo Chang Hảo
              Trung Gúa
              Xiên Chai
              Gua Zẩu
              Píng Chi-Linh
              Gúa Hấn
              Xí Goàn
              Ping Chi-Linh
            </Text>
          </View>
        </View>
        <View>
          <SpaceComponent height={65} />
          <Image style={[globalStyle.smallcard]} source={require('../../assets/image/Onboard3.png')} />
          <View style={[globalStyle.onboardswipe]}>
            <Text style={styles.headertext}>
              Khám phá những sự kiện sắp tới
            </Text>
            <Text style={styles.contenttext}>
              Zảo Chang Hảo
              Trung Gúa
              Xiên Chai
              Gua Zẩu
              Píng Chi-Linh
              Gúa Hấn
              Xí Goàn
              Ping Chi-Linh
            </Text>
          </View>
        </View>

      </Swiper>
      <View style={[
        {
          paddingHorizontal: appInfos.size.WIDTH * 0.07,
          paddingVertical: appInfos.size.WIDTH * 0.06,
          position: 'absolute',
          bottom: 0,
          left: 0,  
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }
      ]}>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text>Bỏ Qua</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => index < 2 ? setindex(index + 1) : navigation.navigate('LoginScreen')} >
          <Text>Con cac</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnBoardingScreen 

const styles = StyleSheet.create({
  headertext: {
    color: appColors.white,
    fontSize: 27,
    fontWeight:'bold',
    paddingHorizontal: appInfos.size.WIDTH*0.15,
    paddingVertical: 40,
    justifyContent: 'center',
    textAlign:'center',
  },
  contenttext: {

    color: appColors.white,
    fontSize: 16,
    paddingHorizontal: appInfos.size.WIDTH * 0.1,
    justifyContent: 'center',
    textAlign: 'center',
  }
})