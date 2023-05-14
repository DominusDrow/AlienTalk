import { AlienCmp }  from '../components/AlienCmp';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from '@rneui/themed';

const ScreenMainUser = () => {
  return (
    <View style={styles.container}>
      <AlienCmp />
      <View style={styles.topBar}>
        <View>
          <Text style={{ color: 'white' }}>Energy: 100%</Text>
          <Text style={{ color: 'white' }}>Health: 100%</Text>
        </View>
        <Text style={{ color: 'white' }}>Extraterrestrial</Text>
        <View>
          <Icon name="notifications" type="ionicons" color="white" />
          <Text style={{ color: 'white' }}>10</Text>
        </View>
      </View>
      <View style={styles.middleContent}>
        <View style={styles.starWindow}>
          <Text style={{ color: 'white' }}>Star Window</Text>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.screen} />
        <View style={styles.bed} />
      </View>
    </View>
  );
};

export default ScreenMainUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starWindow: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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


