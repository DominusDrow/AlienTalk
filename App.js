import { StyleSheet, View, ImageBackground } from 'react-native';
import {DraggableButton}  from './components/Drag';
import nave from './assets/nave/nave.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={nave} style={styles.image}>
        <DraggableButton />
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
