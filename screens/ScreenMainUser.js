import { AlienCmp } from '../components/AlienCmp'

import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Stars } from '../components/background/Starts'
import TobBar from '../components/TopBar'
import { ComputerInfo } from '../components/ComputerInfo'

// Svg components
// import Computer from '../components/spaceship/Computer'
import Bed from '../components/spaceship/Bed'
import Desk from '../components/spaceship/Desk'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ScreenMainUser = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AlienCmp />
        <View style={styles.topHalf}>

          <TobBar />

          <View style={styles.middleContent}>
            <View style={styles.starWindow}>
              <Stars x={screenWidth * 0.88} y={screenHeight * 0.45} />

            </View>
          </View>

        </View>

        <View style={styles.bottomHalf}>

          <View style={{ flexDirection: 'column', alignItems: 'center', bottom: 80 }}>
            <ComputerInfo />

            <View style={styles.bottomBar}>
              <Bed />
              <Desk />
            </View>
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default ScreenMainUser

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topHalf: {
    flex: 3,
    backgroundColor: 'gray'
  },
  bottomHalf: {
    flex: 2,
    backgroundColor: 'lightblue'
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  starWindow: {
    width: screenWidth * 0.88,
    height: screenHeight * 0.45,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    backgroundColor: '#1a1a1a',
    bottom: 10
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
