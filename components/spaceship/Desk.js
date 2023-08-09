import React from 'react'
import { View } from 'react-native'
import Svg, { Rect, Line, Polygon } from 'react-native-svg'

const Desk = () => {
  return (
    <View>
      <Svg width='170' height='180'>
        {/* Desktop */}
        <Rect x='30' y='10' width='100' height='100' rx='10' fill='#333' />

        {/* Monitor */}
        <Rect x='40' y='20' width='80' height='80' rx='5' fill='#f2f2f2' />

        {/* Legs */}
        <Rect x='40' y='100' width='20' height='50' fill='#333' />
        <Rect x='100' y='100' width='20' height='50' fill='#333' />

      </Svg>
    </View>
  )
}

export default Desk
