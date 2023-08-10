// SCREEN STORE
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Stars } from '../components/background/Starts'
import UFO from '../components/space/UFO'
import UFO2 from '../components/space/UFO2'

const ScreenLogin = (/* { navigation } */) => {
  return (
    <View style={styles.container}>

      <Stars />

      <TouchableOpacity style={styles.img}>
        <UFO />
      </TouchableOpacity>

      <TouchableOpacity style={styles.img2}>
        <UFO2 />
      </TouchableOpacity>

    </View>
  )
}
export default ScreenLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    width: '100%',
    height: '100%'
  },
  img: {
    width: '20%',
    position: 'absolute',
    top: '10%',
    left: '20%'
  },
  img2: {
    width: '20%',
    position: 'absolute',
    bottom: '20%',
    right: '20%'
  }

})
