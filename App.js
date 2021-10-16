import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Caixa from './componentes/Caixa';

import { useState } from 'react';

export default function App() {

  const [jogador, setJogador] = useState(0)

  const [tabuleiro, setTabuleiro] = useState([
                                              [0,0,0],
                                              [0,0,0],
                                              [0,0,0]
                                            ])

  /**
   * Diz quem é o vencedor ou retorna null
   */
  function vencedor() {

    let p1 = [
      [1,1,1],
      [1,2,0],
      [1,0,0]
    ]

    for (let linha = 0; linha < 3; linha++) {

      // pega o vencedor por linha
      if (tabuleiro[linha][0] === tabuleiro[linha][1] === tabuleiro[linha][2]) {
        if (tabuleiro[linha][0] !== 0) {
          return tabuleiro[linha][0];
        }
      }
    }


  }

  return (
    <View style={styles.container}>
      <Text>Teste de jogo</Text>
      <StatusBar style="auto" />

      <View style={styles.tabuleiro}>
        <View style={styles.linha}>
          <Caixa linha={0} coluna={0} jogador={jogador} mudaTurno={setJogador} />
          <Caixa linha={0} coluna={1} jogador={jogador} mudaTurno={setJogador} />
          <Caixa linha={0} coluna={2} jogador={jogador} mudaTurno={setJogador} />
        </View>
        <View style={styles.linha}>
          <Caixa linha={1} coluna={0} jogador={jogador} mudaTurno={setJogador} />
          <Caixa linha={1} coluna={1} jogador={jogador} mudaTurno={setJogador} />
          <Caixa linha={1} coluna={2} jogador={jogador} mudaTurno={setJogador} />
        </View>
        <View style={styles.linha}>
          <Caixa linha={2} coluna={0} jogador={jogador} mudaTurno={setJogador} />
          <Caixa linha={2} coluna={1} jogador={jogador} mudaTurno={setJogador} />
          <Caixa linha={2} coluna={2} jogador={jogador} mudaTurno={setJogador} />
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

  },

  linha: {
    flexDirection: 'row'
  }
});
