import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { CatTextItem } from '../../atoms'
import Number from '../Number'

const PopularItems = ({image, cat, title, price}) => {
  return (
    <View style={styles.container}>
        <CatTextItem cat={cat} />
        <Image source={image} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>
            <Number
                number={price}
            />
        </Text>
    </View>
  )
}

export default PopularItems

const styles = StyleSheet.create({
    container: {
        width: 215,
        height: 278,
        backgroundColor: customColors.white,
        elevation: 5,
        marginTop: 16,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 20,
        padding: 20,
    },
    image : {
        width: 175,
        height: 120,
        marginTop : 20,
        borderRadius: 12
    },
    title: {
        fontSize: 18,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.black,
        marginTop: 24
    },
    price : {
        fontSize: 14,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.primary,
    }
})