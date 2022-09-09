import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { NumericFormat } from 'react-number-format'

const Number = ({number}) => {
  return (
    <NumericFormat
        value={number}
        thousandSeparator=","
        prefix='IDR '
        renderText={(value) => <Text>{value}</Text>}
        displayType="text"
    />
  )
}

export default Number

const styles = StyleSheet.create({})