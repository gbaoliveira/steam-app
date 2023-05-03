import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Icon() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/foto.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 4,
    marginBottom: 10,
  }
});