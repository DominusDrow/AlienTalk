import React from 'react'
import { View } from 'react-native'
import Svg, { Rect, Path, Circle } from 'react-native-svg'

const Bed = () => {
  return (
    <View>
      <Svg width="200" height="150">
        {/* Bed frame */}
        <Path
          d="M10,140 L10,100 Q10,90 20,90 L180,90 Q190,90 190,100 L190,140 L10,140 Z"
          fill="#333"
        />

        {/* Bed legs */}
        <Rect x="40" y="130" width="20" height="20" fill="#333" />
        <Rect x="140" y="130" width="20" height="20" fill="#333" />

        {/* Headboard */}
        <Path
          d="M10,100 L10,60 Q10,50 20,50 L120,50 Q130,50 130,60 L130,100 L10,100 Z"
          fill="#333"
        />

        {/* Mattress */}
        <Rect x="30" y="70" width="140" height="50" rx="10" fill="#f2f2f2" />

        {/* Pillow */}
        <Rect x="60" y="80" width="20" height="40" rx="5" fill="#f2f2f2" />

        {/* Pillows decoration */}
        <Circle cx="50" cy="85" r="5" fill="#f2f2f2" />
      </Svg>
    </View>
  )
}

export default Bed
