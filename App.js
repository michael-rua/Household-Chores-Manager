// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageOfBalloon from './ImageOfBalloon'

export default function App () {
  return (
    <>
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <Text style={{ top: 200, textAlign: 'center', color: '#888', fontSize: 18, zIndex: 1 }}>
        Chores Time!
        </Text>
      </View>
      <ImageOfBalloon/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  }
})
