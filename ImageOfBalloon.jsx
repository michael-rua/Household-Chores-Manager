import React, { Component } from 'react'
import { ImageBackground } from 'react-native'

export default class Bananas extends Component {
  render () {
    let pic = {
      url: 'https://images.pexels.com/photos/3102818/pexels-photo-3102818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
    return (
      <ImageBackground source={pic} style={{ width: 450, height: 900 }}/>
    )
  }
}
