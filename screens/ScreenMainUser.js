import { AlienCmp }  from '../components/AlienCmp';

import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import { Stars } from '../components/background/Starts';

//Svg components
import Computer from '../components/spaceship/Computer';
import Bed from '../components/spaceship/Bed';
import Desk from '../components/spaceship/Desk';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ScreenMainUser = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AlienCmp />
        <View style={styles.topHalf}>
          <View style={styles.topBar}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="battery-full" size={20} color="white" />
                <Text style={{ color: 'white' }}>100%</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="moon" type="feather" size={20} color="white" />
                <Text style={{ color: 'white' }}>100%</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="heart" type="antdesign" size={20} color="white" />
                <Text style={{ color: 'white' }}>100%</Text>
              </View>

            </View>
            <Text style={{ color: 'white' }}>Extraterrestrial</Text>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <TouchableOpacity>
                <Icon name="settings" size={35} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.middleContent}>
            <View style={styles.starWindow}>
              <Stars />
            </View>
          </View>
        </View>
        <View style={styles.bottomHalf}>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <TouchableOpacity>
              <Computer />
            </TouchableOpacity>

            <View style={styles.bottomBar}>
              <Bed />
              <Desk />
            </View>
          </View>


        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ScreenMainUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    backgroundColor: 'black',
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  middleContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  starWindow: {
    width: screenWidth * 0.88,
    height: screenHeight * 0.39,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    marginTop: -20,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
 
});


