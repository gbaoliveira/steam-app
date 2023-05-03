import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import AssetExample from '../../components/AssetExample';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1f2127' }}>
        <View style={styles.perfil}>
       <AssetExample />
        <View>
        <Text style={{color: '#fff', fontSize: 25, marginTop: 20, marginBottom: 20}}>
        Gabriel
       </Text>
       <TouchableOpacity style={{ height: 50, width: 140, backgroundColor:'#32353c' , alignItems: 'center', borderRadius: 5}}>
      <Text style={{color: '#fff', marginTop: 15,fontSize: 15, fontWeight: 'bold'}}>View Profile</Text>
      </TouchableOpacity>
     </View>
      </View>

      <View style={styles.gfw}>
      <TouchableOpacity style={{ height: 65, width: 120, backgroundColor:'#32353c', marginLeft: 24, marginTop: 10 , marginBottom: 10 , alignItems: 'center', borderRadius: 5}}>
      <Text style={{color: '#fff', marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>68</Text>
      <Text style={{color: '#fff',fontSize: 16}}>Games</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 65, width: 120, backgroundColor:'#32353c', marginLeft: 10, marginTop: 10 , marginBottom: 10 , alignItems: 'center', borderRadius: 5}}>
      <Text style={{color: '#fff', marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>17</Text>
      <Text style={{color: '#fff',fontSize: 16}}>Friends</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{ height: 65, width: 120, backgroundColor:'#32353c', marginLeft: 10, marginTop: 10 , marginBottom: 10 ,alignItems: 'center', borderRadius: 5}}>
      <Text style={{color: '#fff', marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>R$ 2,77</Text>
      <Text style={{color: '#fff',fontSize: 16}}>Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 58, width: 380, backgroundColor:'#1a97ff', marginLeft: 25, alignItems: 'center', borderRadius: 5, marginBottom: 15 }}>
      <Text style={{color: '#fff', marginTop: 15,fontSize: 18 ,fontWeight: 'bold'}}>Add friends</Text>
      </TouchableOpacity>

      <View style={{backgroundColor: '#2a2c34', width: 500}}>
      <Text style={{marginLeft: 20, marginTop: 10, color: '#878e96'}}>MY CONTENT</Text>
      <TouchableOpacity style={{ height: 25, width: 400, backgroundColor:'#2a2c34' , margin: 10, borderRadius: 5,}}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Friend Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 25, width: 400, backgroundColor:'#2a2c34' , margin: 10, borderRadius: 5}}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Friends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 25, width: 400, backgroundColor:'#2a2c34' , margin: 10, borderRadius: 5}}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Groups</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 25, width: 400, backgroundColor:'#2a2c34' , margin: 10, borderRadius: 5}}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft:10}}>Screenshots/Videos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 25, width: 400, backgroundColor:'#2a2c34' , margin: 10, borderRadius: 5}}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft:10}}>Badges</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 30, width: 400, backgroundColor:'#2a2c34' , margin: 10, borderRadius: 5}}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft:10}}>Inventory</Text>
      </TouchableOpacity>

      </View>
      <TouchableOpacity style={{ height: 40, width: 400,margin: 10, borderRadius: 5}}>
      <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold', marginLeft:10}}>Account Details</Text>
      <Text style={{color: '#878e96', fontSize: 17, marginLeft:10}}>Store, Security, Family</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 40, width: 400,margin: 10, borderRadius: 5}}>
      <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold', marginLeft:10}}>Change Account</Text>
      <Text style={{color: '#878e96', fontSize: 17, marginLeft:10}}>gbaoliveirasilva</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 40, width: 400,margin: 10, borderRadius: 5}}>
      <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold', marginLeft:10}}>Sign out</Text>
      </TouchableOpacity>
      <View>
      </View>
      </View>
        </View>
    );
}

const styles = StyleSheet.create({
      perfil: {
          marginTop: 30,
          height: 150,
          width: 370,
          flexDirection: 'row',
          flexWrap: 'wrap',
      },
      gfw: {
          flexDirection: 'row',
          flexWrap: 'wrap',
      }
  });
  