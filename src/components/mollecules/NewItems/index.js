import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { Makaroni11 } from '../../../assets'
import { CatTextItem } from '../../atoms'
import Number from '../Number'

const NewItems = ({image, cat, title, desc, price}) => {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <View style={styles.content}>
            <CatTextItem cat={cat}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
            <View style={styles.pricecontainer}>
                <Text style={styles.price}>
                    <Number
                        number={price}
                    />
                </Text>
                <View style={styles.btnbuy}>
                    <Text style={styles.buytext}>Buy</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default NewItems

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 24,
        height: 150,
        backgroundColor: customColors.white,
        elevation: 5,
        borderRadius: 12,
        marginBottom: 20,
        padding: 16,
        flexDirection: 'row',
        flex: 1,
    },
    image : {
        width: 118,
        height: 118,
        borderRadius: 12
    },
    content : {
        marginLeft: 16,
        flex: 1,
    },
    title: {
        marginTop: 8,
        fontSize: 14,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.black
    },
    pricecontainer : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price : {
        fontSize: 14,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.primary,
        flex: 1,
    },
    btnbuy : {
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: customColors.primary,
        borderRadius: 12
    },
    buytext : {
        color: customColors.white,
        fontFamily: customFonts.primary.regular,
        fontSize: 10
    },
    desc : {
        maxWidth: Dimensions.get('window').width - 48 - 16 - 118 - 16 - 16,
        fontSize: 10,
        fontFamily: customFonts.primary.regular,
        color: customColors.grey,
        marginTop: 8,
        flex: 1,
    },
})