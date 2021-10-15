import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Caixa from './componentes/Caixa';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste de jogo</Text>
      <StatusBar style="auto" />

      <View style={styles.tabuleiro}>
        <View style={styles.linha}>
          <Caixa /><Caixa /><Caixa />
        </View>
        <View style={styles.linha}>
          <Caixa /><Caixa /><Caixa />
        </View>
        <View style={styles.linha}>
          <Caixa /><Caixa /><Caixa />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabuleiro: {
    flex: 1
  },

  linha: {
    flexDirection: 'row'
  }
});
