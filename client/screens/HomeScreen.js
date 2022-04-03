import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Example from '../components/Example.js'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Example />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c4c4c4',
    textAlign: 'center'
  }
})
