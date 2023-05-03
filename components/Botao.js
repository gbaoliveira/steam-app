import React from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";

const Botao = () => {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity style={{ height: 60, backgroundColor:'#216dae' , alignItems: 'center', borderRadius: 5}}>
      <Text style={{color: '#93b4d0', marginTop: 15, fontSize: 20}}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    padding: 10
  },
});

export default Botao;