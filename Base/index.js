import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { } from './styles';


export default Base = () => {

  return (
    <View style={styles.container}>
      <Text>Tela Base</Text>
      <Button title="Texto Botao" onPress={() => alert('Botao clicado')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

