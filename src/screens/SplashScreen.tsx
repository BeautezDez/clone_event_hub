import React from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import { appInfos } from '../constants/appInfos'
import { SpaceComponent } from '../component'
import { appColors } from '../constants/appColor'

const SplashScreen = () => {
  return (
    <View
    style= {{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    }}>
      <Image source={require('../assets/image/SplashLogo.png')} 
      style= {{
        width: appInfos.size.WIDTH *0.75,
        resizeMode: 'contain'
      }}/> 
      <SpaceComponent height={16}/>
      <ActivityIndicator color={appColors.gray}  size={33}/>
    </View>
  )
}

export default SplashScreen