import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { customColors, customFonts } from '../../utils'
import { IlLogo } from '../../assets'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 2000);
  }, [])

  return (
    <View style={styles.container}>
      <IlLogo/>
      <Text style={styles.title}>Makaroniyeh</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor : customColors.primary
  },
  title : {
    color: customColors.white,
    fontFamily: customFonts.primary.semiBold,
    fontSize : 32,
    marginTop : 30
  }
})