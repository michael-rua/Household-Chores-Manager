import React, { Component } from 'react'
import { ImageBackground } from 'react-native'

export default class Bananas extends Component {
  render () {
    let pic = {
      url: 'https://images.pexels.com/photos/4239041/pexels-photo-4239041.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    }
    return (
      <ImageBackground source={pic} style={{ width: 450, height: 1000, zIndex: -1 }}/>
    )
  }
}
