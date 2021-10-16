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

  const { jogador, mudaTurno } = props;

  const [simbolo, setSimbolo] = useState()

  let icone = "";

  if (simbolo != null) {
    if (simbolo === 0) {
      icone = <Feather name="x" size={60} color="black" />
    } else {
      icone = <Feather name="circle" size={60} color="black" />
    }
  }

  let jogada = function() {

    if (simbolo != null) {
      return;
    }

    setSimbolo(jogador)    
    let turno = (jogador === 1)? 0 : 1;
    mudaTurno(turno)
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