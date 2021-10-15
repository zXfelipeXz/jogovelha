import React from 'react';
import { 
  StyleSheet,  
  View,
  Text
} from 'react-native';

import { useState } from 'react';

export default function Caixa() {

  const [simbolo, setSimbolo ] = useState()

  let icone = "";

  if (simbolo != null) {
    if (simbolo === 0) {
      icone = "X"
    } else {
      icone = "O"
    }
  }

  return (
    <View style={css.borda}>
      <Text>
        { icone }
      </Text>
    </View>
  )
}

var css = StyleSheet.create({
  borda: {
    borderColor: "#000000",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 10,
    minHeight: 100,
    minWidth: 100
  }
})