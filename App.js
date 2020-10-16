import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import ImageOfBalloon from './ImageOfBalloon'
export default function App () {
  const pic = {
    url: 'https://images.pexels.com/photos/3102818/pexels-photo-3102818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={pic} style= {{ width: 100, height: 300 }}/>
      <ImageOfBalloon/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundImage: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
