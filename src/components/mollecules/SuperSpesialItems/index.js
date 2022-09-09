import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { CatTextItem, Gap } from '../../atoms'
import Number from '../Number'

const SuperSpesialItems = ({image, cat, title, price}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headcontent}>
            <Image source={image} style={styles.image}/>
            <View style={{ flex: 1 }}/>
            <View style={styles.catcontainer}>
                <CatTextItem cat={cat} />
            </View>
            <Gap width={ ((Dimensions.get('window').width / 2) - 48 - 15 - 42 - 10)/2 }/>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>
            <Number number={price}/>
        </Text>
    </View>
  )
}

export default SuperSpesialItems

const styles = StyleSheet.create({
    container : {
        width: (Dimensions.get('window').width / 2) - 48 - 15,
        height: 107,
        backgroundColor: customColors.white,
        elevation: 3,
        flex: 1,
        marginBottom: 16,
        borderRadius: 8
    },
    image: {
        width: 42,
        height: 42,
        position: 'absolute',
        top: 10,
        left: 10,
        borderRadius: 8
    },
    headcontent : {
        flexDirection: 'row'
    },
    catcontainer : {
        marginTop: 21,
    },
    title : {
        fontSize : 12,
        fontFamily: customFonts.primary.medium,
        color: customColors.black,
        marginTop: 19,
        marginLeft: 10
    },
    price : {
        fontSize: 10,
        fontFamily: customFonts.primary.semiBold,
        color: customColors.primary,
        marginLeft: 10
    }
})