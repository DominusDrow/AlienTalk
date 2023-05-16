import React from 'react';
import { View } from 'react-native';
import Svg, { Rect, Text } from 'react-native-svg';

const Computer = () => {
  return (
    <View style={styles.container}>
      <Svg width="200" height="200">
        {/* Monitor */}
        <Rect x="20" y="0" width="160" height="100" rx="10" fill="#f2f2f2" />

        {/* Screen Frame */}
        <Rect x="30" y="10" width="140" height="80" rx="5" fill="#333" />

        {/* Speakers */}
        <Rect x="10" y="35" width="20" height="40" rx="5" fill="#777" />
        <Rect x="170" y="35" width="20" height="40" rx="5" fill="#777" />

        {/* Terminal Text */}
        <Text x="40" y="50" fill="green" fontFamily="monospace" fontSize="11">
          {'$ Hello, world!'}
        </Text>

        {/* CPU */}
        <Rect x="40" y="100" width="120" height="30" rx="10" fill="#f2f2f2" />
      </Svg>
    </View>
  );
};

export default Computer;

const styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -35,
  },
};

