import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Caixa from './componentes/Caixa';

import { useState } from 'react';

export default function App() {

  const [jogador, setJogador] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Teste de jogo</Text>
      <StatusBar style="auto" />

      <View style={styles.tabuleiro}>
        <View style={styles.linha}>
          <Caixa jogador={jogador} mudaTurno={setJogador} />
          <Caixa jogador={jogador} mudaTurno={setJogador} />
          <Caixa jogador={jogador} mudaTurno={setJogador} />
        </View>
        <View style={styles.linha}>
          <Caixa jogador={jogador} mudaTurno={setJogador} />
          <Caixa jogador={jogador} mudaTurno={setJogador} />
          <Caixa jogador={jogador} mudaTurno={setJogador} />
        </View>
        <View style={styles.linha}>
          <Caixa jogador={jogador} mudaTurno={setJogador} />
          <Caixa jogador={jogador} mudaTurno={setJogador} />
          <Caixa jogador={jogador} mudaTurno={setJogador} />
        </View>
      </View>

      <Text>
        Agora é a vez do jogador {jogador + 1}
      </Text>
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
