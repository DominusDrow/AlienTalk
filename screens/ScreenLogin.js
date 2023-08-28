// SCREEN 1
import { View, StyleSheet } from 'react-native'
import { Button } from '@rneui/themed'

import { Stars } from '../components/background/Starts'
import { useDispatch } from 'react-redux'
import { loginSimple } from '../redux/authSlice'

const ScreenLogin = (/* { navigation } */) => {
  const dispatch = useDispatch()

  // <Image style={styles.img} source={require("../assets/img/hungry.jpg")} />
  return (
    <View style={styles.container}>

      <Stars />
      <Button
        title='LOG IN'
        buttonStyle={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10
        }}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={() => dispatch(loginSimple())}
      />

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
    width: '50%',
    height: '100%'
  },
  img: {
    width: '80%',
    height: 300,
    marginTop: '30%',
    marginLeft: '10%',
    resizeMode: 'contain'
  }

})
