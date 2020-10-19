// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Alert,
  TouchableOpacity,
  StatusBar
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
          {/* <View style= {styles.container}> */}
          <View style= {styles.centerContentStyle}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('This will do something soon!')}
            >
              <Text style={styles.text}>
              Chores Time!
              </Text>

            </TouchableOpacity>
          </View>
          {/* </View> */}
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
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'black'
  },
  centerContentStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5
  }
})
