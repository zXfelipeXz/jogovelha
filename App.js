import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Caixa from './componentes/Caixa';

import { useState } from 'react';

export default function App() {

  const [jogador, setJogador] = useState(1)

  let [tabuleiro, setTabuleiro] = useState([
                                              [0,0,0],
                                              [0,0,0],
                                              [0,0,0]
                                            ])

  /**
   * Seta valor no tabulero
   */                                          
  function alteraTabuleiro(jogador, linha, coluna){
    
    tabuleiro[linha][coluna] = jogador;
    setTabuleiro(tabuleiro)

    let turno = (jogador === 1)? 2 : 1;
    setJogador(turno)
    
  }

  /**
   * Diz quem é o vencedor ou retorna null
   */
  function vencedor() {


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
          <Caixa linha={0} coluna={0} jogador={jogador} mudaTurno={alteraTabuleiro} />
          <Caixa linha={0} coluna={1} jogador={jogador} mudaTurno={alteraTabuleiro} />
          <Caixa linha={0} coluna={2} jogador={jogador} mudaTurno={alteraTabuleiro} />
        </View>
        <View style={styles.linha}>
          <Caixa linha={1} coluna={0} jogador={jogador} mudaTurno={alteraTabuleiro} />
          <Caixa linha={1} coluna={1} jogador={jogador} mudaTurno={alteraTabuleiro} />
          <Caixa linha={1} coluna={2} jogador={jogador} mudaTurno={alteraTabuleiro} />
        </View>
        <View style={styles.linha}>
          <Caixa linha={2} coluna={0} jogador={jogador} mudaTurno={alteraTabuleiro} />
          <Caixa linha={2} coluna={1} jogador={jogador} mudaTurno={alteraTabuleiro} />
          <Caixa linha={2} coluna={2} jogador={jogador} mudaTurno={alteraTabuleiro} />
        </View>
      </View>

      <Text>
        Agora é a vez do jogador {jogador}
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
