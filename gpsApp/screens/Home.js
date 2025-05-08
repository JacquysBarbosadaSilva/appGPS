import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Home = () => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');

  const tentarLogar = () => {
    console.log(`Origem: ${origem}, Destino: ${destino}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Por favor, insira o destino desejado.</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Origem"
          value={origem}
          onChangeText={setOrigem}
        />
        <TextInput
          style={styles.input}
          placeholder="Destino"
          value={destino}
          onChangeText={setDestino}
        />
        <TouchableOpacity style={styles.button} onPress={tentarLogar}>
          <Text style={styles.buttonText}>Pesquisar rota</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  input: {
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    right: 10,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default Home;

