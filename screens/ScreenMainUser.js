import { AlienCmp }  from '../components/AlienCmp';

import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ScreenMainUser = () => {
  return (
    <SafeAreaProvider>
      <AlienCmp />
      <SafeAreaView style={styles.container}>
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
              <Text style={{ color: 'white' }}>Star Window</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomHalf}>
          <View style={styles.bottomBar}>
            <View style={styles.screen} />
            <View style={styles.bed} />
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
    backgroundColor: 'lightgrey',
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
    width: screenWidth * 0.9,
    height: screenHeight * 0.4,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  screen: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  bed: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
});


