import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const Menu = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const Option1 = () => (
    <TouchableOpacity onPress={() => console.log('Opción 1')} style={styles.buttonText}>
      <Text>Opción 1</Text>
    </TouchableOpacity>
  );

  const Option2 = () => (
    <TouchableOpacity onPress={() => console.log('Opción 2')}>
      <Text>Opción 2</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.button} onPress={toggleOptions}>
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.optionsContainer}>
          <Option1 />
          <Option2 />
        </View>
      )}
    </View>
  );
};


const styles = {
  button: {
    position: 'absolute',
    top: 60,
    right: 60,
    padding: 10,
    borderRadius: 10,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  optionsContainer: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
};








