import React, { useRef, useState } from 'react';
import { TouchableOpacity, StyleSheet, PanResponder, Animated, Image } from 'react-native';
import alien from '../assets/alien/alien.png';

export const Alien = () => {
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const position = useRef(new Animated.ValueXY(lastPosition)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      // Guardar la última posición cuando se inicia el gesto
      setLastPosition({ x: position.x._value, y: position.y._value });
      position.setOffset({ x: position.x._value, y: position.y._value });
      position.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event(
      [null, { dx: position.x, dy: position.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      position.flattenOffset();
    },
  });  

  return (
      <Animated.View
        style={[styles.button, position.getLayout()]}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity style={styles.touchable}>
          <Image source={alien} style={styles.image} />
        </TouchableOpacity>
      </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
  },
  touchable: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});



