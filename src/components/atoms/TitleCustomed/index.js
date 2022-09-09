import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils' 

const TitleCustomed = ({title, subtitle}) => {
  return (
    <View style={styles.bseltitle}>
      <Text style={styles.bselfirsttitle}>{title}</Text>
      <Text style={styles.bselsectitle}>{subtitle}</Text>
    </View>
  )
}

export default TitleCustomed

const styles = StyleSheet.create({
    bseltitle : {
        marginHorizontal: 24,
    },
    bselfirsttitle : {
        fontSize : 14,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.black
    },
    bselsectitle : {
        fontSize: 12,
        fontFamily: customFonts.primary.regular,
        color: customColors.grey
    }
})