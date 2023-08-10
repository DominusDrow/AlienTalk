import React from 'react'
import { View } from 'react-native'
import Svg, { Ellipse, Circle, Rect } from 'react-native-svg'

const UFO = () => {
  return (
    <View style={styles.container}>
      <Svg width='200' height='200'>
        {/* UFO Body */}
        <Ellipse cx='100' cy='100' rx='80' ry='40' fill='#888' />

        {/* UFO Top Light */}
        <Circle cx='100' cy='60' r='10' fill='yellow' />

        {/* UFO Windows */}
        <Rect x='60' y='90' width='80' height='30' rx='5' fill='#f2f2f2' />
        <Rect x='50' y='130' width='100' height='30' rx='5' fill='#f2f2f2' />
        <Rect x='40' y='170' width='120' height='30' rx='5' fill='#f2f2f2' />
      </Svg>
    </View>
  )
}

export default UFO

const styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -35
  }
}
