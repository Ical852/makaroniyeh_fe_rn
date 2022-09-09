import { StyleSheet, View, Dimensions, Image, Text } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import Number from '../Number'
import { CatTextItem } from '../../atoms'

const BestSellerItems = ({image, title, cat, price}) => {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <View style={styles.catcontainer}>
            <CatTextItem cat={cat}/>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>
            <Number number={price}/>
        </Text>
    </View>
  )
}

export default BestSellerItems

const styles = StyleSheet.create({
    container: {
        height: 205,
        width: Dimensions.get('window').width - 48,
        backgroundColor: customColors.white,
        elevation: 5,
        marginRight: 24,
        marginTop: 16,
        marginBottom: 20,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 8
    },
    image: {
        height: 92,
        width: Dimensions.get('window').width - 48 - 16,
        borderRadius: 4
    },
    title : {
        marginTop: 38,
        fontSize: 18,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.black
    },
    price : {
        fontSize: 14,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.primary
    },
    catcontainer: {
        position: 'absolute',
        left: 8,
        top: 114,
    }
})