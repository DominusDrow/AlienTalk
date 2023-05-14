import { StyleSheet, View, ImageBackground, Button, Text } from 'react-native';
import { AlienCmp }  from '../components/AlienCmp';
import nave from '../assets/nave/nave.jpg';
import { Stars } from '../components/background/Starts';
import { Menu } from '../components/Menu';

import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

export default function ScreenMainUser({ navigation }) {
  const dispatch = useDispatch()


  return (
    <View style={styles.container}>
      <ImageBackground source={nave} style={styles.image}>
        <Menu />
        <View style={styles.startsContainer}>
          <Stars />
        </View>
        <AlienCmp />

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  //style for the container view that should be a stage in in space
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  startsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '50%',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
});
