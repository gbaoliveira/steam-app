import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import AssetExample from '../../components/AssetExample';

export default function GameScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Tela de jogos</Text>
        </View>
    );
}