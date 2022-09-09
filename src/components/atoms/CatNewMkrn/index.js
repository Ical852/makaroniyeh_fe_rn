import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const CatNewMkrn = ({title, active, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(active)} activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CatNewMkrn

const styles = StyleSheet.create({
    container : (active) => ({
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderColor: customColors.primary,
        borderWidth: 1,
        borderRadius: 12,
        marginRight: 16,
        backgroundColor : active ? customColors.primary : customColors.white,
    }),
    text: (active) => ({
        color: active ? customColors.white : customColors.primary,
        fontSize: 13,
        fontFamily : active ? customFonts.primary.medium : customFonts.primary.light
    })
})