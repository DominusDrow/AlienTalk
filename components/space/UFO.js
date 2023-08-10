import React from 'react'
import { View } from 'react-native'
import Svg, { Circle, Polygon } from 'react-native-svg'

const UFO = () => {
  return (
    <View style={styles.container}>
      <Svg width='200' height='200'>
        {/* Body */}
        <Circle cx='100' cy='100' r='80' fill='#c0c0c0' />

        {/* Dome */}
        <Circle cx='100' cy='60' r='30' fill='#808080' />

        {/* Lights */}
        <Circle cx='70' cy='130' r='5' fill='yellow' />
        <Circle cx='130' cy='130' r='5' fill='yellow' />

        {/* Windows */}
        <Circle cx='70' cy='70' r='10' fill='black' />
        <Circle cx='100' cy='70' r='10' fill='black' />
        <Circle cx='130' cy='70' r='10' fill='black' />

        {/* Beam */}
        <Polygon points='90,140 80,200 120,200' fill='rgba(255, 255, 0, 0.3)' />
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
