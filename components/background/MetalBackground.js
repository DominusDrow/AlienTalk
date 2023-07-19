import React from 'react'
import { View } from 'react-native'
import Svg, { LinearGradient, Rect, Stop } from 'react-native-svg'

const MetalBackground = () => {
  return (
    <View style={styles.container}>
      <Svg width="300" height="300">
        <LinearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#222" />
          <Stop offset="30%" stopColor="#555" />
          <Stop offset="70%" stopColor="#555" />
          <Stop offset="100%" stopColor="#222" />
        </LinearGradient>
        <Rect x="0" y="0" width="300" height="300" fill="url(#metal-gradient)" />
      </Svg>
    </View>
  )
}

export default MetalBackground

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0
  }
}
