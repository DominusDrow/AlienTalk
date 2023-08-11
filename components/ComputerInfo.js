import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons' // Asegúrate de tener el paquete de íconos instalado
import { useNavigation } from '@react-navigation/native'

import Computer from './spaceship/Computer'

export const ComputerInfo = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const navigation = useNavigation()

  return (
    <View >
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Computer />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='slide' transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalFrame}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Hi Master</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconItem} onPress={() => navigation.navigate('GameComponent')}>
                  <FontAwesome name='rocket' size={40} color='green' style={styles.icon} />
                  <Text style={styles.iconText}>Games</Text>
                </TouchableOpacity>
                <View style={styles.iconItem}>
                  <FontAwesome name='star' size={40} color='green' style={styles.icon} />
                  <Text style={styles.iconText}>Mission</Text>
                </View>
                <View style={styles.iconItem}>
                  <FontAwesome name='globe' size={40} color='green' style={styles.icon} />
                  <Text style={styles.iconText}>Globe</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '40%'
  },
  modalFrame: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    width: '90%', // La ventana modal abarca el 90% de la pantalla
    height: '40%'
  },
  modalContent: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  modalTitle: {
    color: 'green',
    fontSize: 24,
    marginBottom: 10
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  iconItem: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5
  },
  icon: {
    marginBottom: 5
  },
  iconText: {
    color: 'green'
  },
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    top: '25%',
    alignSelf: 'center'
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16
  }
})

export default ComputerInfo
