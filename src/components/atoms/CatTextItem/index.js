import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const CatTextItem = ({cat}) => {
  return (
    <View style={styles.catcontainer}>
        <Text style={styles.cattext}>{cat}</Text>
    </View>
  )
}

export default CatTextItem

const styles = StyleSheet.create({
  catcontainer: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: customColors.primary,
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
  cattext: {
    fontSize: 10,
    fontFamily: customFonts.primary.regular,
    color: customColors.white
  },
})