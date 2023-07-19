import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'

import Computer from './spaceship/Computer'

export const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Computer />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Contenido del modal</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Cerrar modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  )
}
