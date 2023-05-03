import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function notifi() {
  return (
    <View style={{height:670}}>
    <View style={{width:430, height:100,flexDirection:'row'}}>
      <Image style={styles.logo} source={require('../assets/among.png')} />
      <View>
        <Text style={styles.texto}>Friend Request Apr 24</Text>
        <Text style={styles.nome}>Jack</Text>
        <Text style={styles.assunto}>and you are now friends</Text>
      </View>
    </View>

    <View style={{width:250, height:100, flexDirection:'row', padding: 10}}>
      <Image style={{width: 80, height: 70}} source={require('../assets/shitass.png')} />
      <View>
        <Text style={{color: '#5a616b', fontSize: 18, marginLeft: 10}}>Comment</Text>
        <Text style={{color: '#fff',fontWeight: 'bold', fontSize: 18, marginLeft: 10}}>Your profile</Text>
        <Text style={{color: '#b8bcbf', fontSize: 18, marginLeft: 10}}>belo perfil</Text>
      </View>
    </View>

    <View style={{width:250, height:100, flexDirection:'row', marginLeft: 6, marginTop: 10}}>
      <Image style={{width: 80, height: 80, marginLeft: 3}} source={require('../assets/afolou.jpg')} />
      <View>
        <Text style={{color: '#5a616b', fontSize: 18, marginLeft: 10}}>Friend request Jun 14</Text>
        <Text style={{color: '#fff',fontWeight: 'bold', fontSize: 18, marginLeft: 10}}>Afolou</Text>
        <Text style={{color: '#b8bcbf', fontSize: 18, marginLeft: 10}}>and you are now friends</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
  },
  texto :{
    color: '#5a616b',
    fontSize: 18,
    marginTop: 10
  },
    nome :{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  assunto :{
    color: '#b8bcbf',
    fontSize: 18,
  },
});