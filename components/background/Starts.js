import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import start from '../../assets/background/start.png';

export const Stars = () => {
  const [stars, setStars] = useState([...Array(40)].map(() => ({ visible: true, x: Math.random() * 400, y: Math.random() * 400 })));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStars(prevStars => {
        const updatedStars = [...prevStars];

        // Ocultar la primera estrella visible con animación de desvanecimiento
        const visibleIndex = prevStars.findIndex(star => star.visible);
        if (visibleIndex !== -1) {
          updatedStars[visibleIndex].visible = false;
        }

        // Mostrar una nueva estrella en una posición aleatoria
        const randomIndex = Math.floor(Math.random() * prevStars.length);
        updatedStars[randomIndex].visible = true;

        return updatedStars;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.starsContainer}>
      {stars.map((star, index) => (
        <FadeInView key={index} visible={star.visible}>
          <View
            style={[
              styles.star,
              { left: star.x, top: star.y },
            ]}
          >
            <Image source={start} style={styles.image} />
          </View>
        </FadeInView>
      ))}
    </View>
  );
};

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(props.visible ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: props.visible ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, props.visible]);

  if (!props.visible) {
    return (
      <Animated.View style={{ ...props.style, opacity: fadeAnim }}>
        {props.children}
      </Animated.View>
    );
  }

  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnim }}>
      <Animated.View style={{ opacity: fadeAnim }}>
        {props.children}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  starsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  star: {
    position: 'absolute',
    width: 20,
    height: 20,
  },
  image: {
    width: 20,
    height: 20,
  },
});

