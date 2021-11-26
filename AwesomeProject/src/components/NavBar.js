import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const NavBar = ({ title }) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'skyblue'
  },
  text: {
    color: 'purple',
    fontSize: 20,
    paddingBottom: 20
  }
})
