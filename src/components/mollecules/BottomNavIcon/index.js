import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { IcExplore, IcHome, IcProfile, IcWish } from '../../../assets'
import { customColors, customFonts } from '../../../utils'

const BottomNavIcon = ({icon, active}) => {
    const Icon = () => {
        if (icon == 'Home') {
            return <IcHome/>
        } else if(icon == 'Explore') {
            return <IcExplore/>
        } else if (icon == 'Wish') {
            return <IcWish/>
        } else {
            return <IcProfile/>
        }
    }

  return (
    <View style={styles.container}>
      <Icon/>
      <Text style={styles.text(active)}>Home</Text>
    </View>
  )
}

export default BottomNavIcon

const styles = StyleSheet.create({
    container : {
        alignItems: 'center'
    },
    text : (active) => ({
        fontFamily : active ? customFonts.primary.medium : customFonts.primary.regular,
        marginTop: 2,
        color: active ? customColors.primary : customColors.nonactive
    })
})