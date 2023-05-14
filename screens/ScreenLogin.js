//SCREEN 1
import { View, StyleSheet, Text, Image, Dimensions} from "react-native";
import { Button } from '@rneui/themed';


import { useDispatch } from "react-redux";
//import * as authActions from "../validators/actions/authActions";
import { useSelector } from 'react-redux';

const ScreenLogin = ({ navigation }) => {
  

  const dispatch = useDispatch();


  function goToNumber() {
    navigation.navigate("ScreenTelefonoValido");
  }


  const onClick = () => {
    try {
      dispatch(authActions.tryTrue());
    } catch (e) {
      Alert.alert("Error", e.toString(), [{ text: "Ok" }]);
    }
  };



      //<Image style={styles.img} source={require("../assets/img/hungry.jpg")} />
  return (
    <View style={styles.container}>
      <Button
        title="Log in"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 100,
          height: 50,
          width: 200,
          marginVertical: 50,
        }}
        onPress={() => onClick()}
      />

    </View>
  );
};
export default ScreenLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: "80%",
    height: 300,
    marginTop: "30%",
    marginLeft: "10%",
    resizeMode: "contain",
  },

});
