
import { Text, Icon } from '@rneui/themed';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const TobBar = () => {
  return (
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

  );
}

export default TobBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
