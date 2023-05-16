import { AlienCmp }  from '../components/AlienCmp';

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ScreenMainUser = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.topHalf}>
          <View style={styles.topBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="battery" type="ionicons" color="white" style={{ marginRight: 5 }} />
              <Text style={{ color: 'white', marginRight: 5 }}>Energy:</Text>
              <Text style={{ color: 'white' }}>100%</Text>
            </View>
            <Text style={{ color: 'white' }}>Extraterrestrial</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="health" type="ionicons" color="white" style={{ marginRight: 5 }} />
              <Text style={{ color: 'white', marginRight: 5 }}>Health:</Text>
              <Text style={{ color: 'white' }}>100%</Text>
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


