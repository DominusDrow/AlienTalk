import { View, Image, StyleSheet } from 'react-native';
import start from '../../assets/background/start.png';

export const Stars = () => {
  
  return (
    <View style={styles.startsContainer}>
      {[...Array(100)].map((_, i) => (
        <View key={i}
          style={[
            styles.star,
            { left: Math.random() * 400, top: Math.random() * 800 }
          ]}>
          <Image source={start} style={styles.image} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  startsContainer: {
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


