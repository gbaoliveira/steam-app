import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

import Icon from '../../components/Icon'
import Notifi from '../../components/notifi'

export default function NotificationScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2a2c34'}}>
        <View style={styles.notif}>
        <Text style={{color: '#dfe3e6', fontSize: 20, marginRight: 80, marginLeft: 100, marginTop: 150, height: 40, width: 150}}>
          NOTIFICATIONS
        </Text>
        <Icon/>
      </View>
      <View>
        <Notifi />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2a2c34',
    padding: 8,
  },
  notif: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center', 
    height: 140,
    width: 450,
    marginBottom: 30,
    backgroundColor: '#1f2127'
  }
});