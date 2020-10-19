// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image
} from 'react-native'

export default function App () {
  const pic = {
    uri: 'https://images.pexels.com/photos/4239041/pexels-photo-4239041.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <ImageBackground source={pic} style={styles.image}>
          <View style= {styles.container}>
            <View style= {styles.centerContentStyle}>
              <Text style={styles.text}>
        Chores Time!
              </Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  image: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#666'
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
