import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  Modal 
} from 'react-native';

import Caixa from './componentes/Caixa';

import { useState } from 'react';

export default function App() {

  const [jogador, setJogador] = useState(1)
  const [ganhador, setGanhador] = useState()

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

    
    const ganhou = vencedor();
    if (ganhou != null)
    {
      setGanhador(ganhou)
    }

    let turno = (jogador === 1)? 2 : 1;
    setJogador(turno)
    
  }

  /**
   * Diz quem é o vencedor ou retorna null
   */
  let vencedor = function () {

    let ganhou;
      tabuleiro.forEach((linha) => {

        const [c1, c2, c3] = linha
        
        if (c1 != 0) 
        {
          if (c1 === c2 && c2 === c3) 
          {
            ganhou = c1;
            return vencedor
          }
        }
         
      })

      return ganhou;

  }

  let Novo = function () {

    let reset = () => {
      setJogador(1)
      setGanhador()
      setTabuleiro([
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ])

    }

    return (
      <Button onPress={reset}  title="Novo Jogo"/>
    )
  }



  return (
    <View style={styles.container}>
      
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={ (ganhador != null)? true: false }
        >
          <View style={styles.centeredView}>
            <Text>O vencedor é o jogador {ganhador} </Text>
            <Novo />
          </View>

    </Modal>

      <View style={styles.tabuleiro}>
        <View style={styles.linha}>
          <Caixa linha={0} coluna={0} jogador={jogador} tabuleiro={tabuleiro} mudaTurno={alteraTabuleiro} />
          <Caixa linha={0} coluna={1} jogador={jogador} tabuleiro={tabuleiro} mudaTurno={alteraTabuleiro} />
          <Caixa linha={0} coluna={2} jogador={jogador} tabuleiro={tabuleiro} mudaTurno={alteraTabuleiro} />
        </View>
        <View style={styles.linha}>
          <Caixa linha={1} coluna={0} jogador={jogador} tabuleiro={tabuleiro} mudaTurno={alteraTabuleiro} />
          <Caixa linha={1} coluna={1} jogador={jogador} tabuleiro={tabuleiro} mudaTurno={alteraTabuleiro} />
          <Caixa linha={1} coluna={2} jogador={jogador} tabuleiro={tabuleiro} mudaTurno={alteraTabuleiro} />
        </View>
        <View style={styles.linha}>
          <Caixa linha={2} coluna={0} jogador={jogador} tabuleiro={tabuleiro} mudaTurno={alteraTabuleiro} />
          <Caixa linha={2} coluna={1} jogador={jogador} tabuleiro={tabuleiro} mudaTurno={alteraTabuleiro} />
          <Caixa linha={2} coluna={2} jogador={jogador} tabuleiro={tabuleiro} mudaTurno={alteraTabuleiro} />
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'white',
  }
});


