import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { customColors } from './utils'
import Router from './router'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={customColors.primary}/>
      <Router/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})