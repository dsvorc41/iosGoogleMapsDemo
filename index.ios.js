import React from 'react';
import { Text, View, StyleSheet, Dimensions, AppRegistry } from 'react-native';
import MapView from 'react-native-maps';

const iosGoogleMaps = () => (
  <View>
    <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4ee42',

  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})


AppRegistry.registerComponent('iosGoogleMaps', () => iosGoogleMaps);

