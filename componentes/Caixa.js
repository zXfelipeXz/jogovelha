import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useState } from 'react';

export default function Caixa(props) {

  const { jogador, mudaTurno, linha, coluna, tabuleiro } = props;

  //const [simbolo, setSimbolo] = useState(0)

  const simbolo = tabuleiro[linha][coluna];

  let icone = "";

  if (simbolo != 0) {
    if (simbolo === 1) {
      icone = <Feather name="x" size={60} color="black" />
    } else if (simbolo === 2) {
      icone = <Feather name="circle" size={60} color="black" />
    }
  }

  // Acotence quando a pessoa clica em cima
  let jogada = function() {

    if (simbolo != 0) {
      return;
    }

    mudaTurno(jogador, linha, coluna);
    
  }

  return (
    <TouchableWithoutFeedback onPress={jogada}>
      <View style={css.borda}>

        <Text>
          {icone}
        </Text>

      </View>
    </TouchableWithoutFeedback>
  )
}

var css = StyleSheet.create({
  borda: {
    borderColor: "#000000",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 10,
    minHeight: 100,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})