// Jacquys Barbosa Silva

import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,

} from "react-native";


const RealizarLogin = ({ navigation }) => {
  const img =
    "https://bucket-storage-senai-25.s3.us-east-1.amazonaws.com/imagens/imf-fundo-login.png";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const tentarLogar = () => {
    
    const validEmail = 'teste@gmail.com';
    const validPass = '1234';

    if (email === validEmail && password === validPass) {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate("HomeScreen");
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
    }
  }

  

  return (
    <ImageBackground source={{ uri: img }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={tentarLogar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text 
            // onPress={() => navigation.navigate("Cadastrar")} 
            style={styles.cadastrar} >Cadastrar-se
          </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#1B0000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cadastrar:{
    color: "#1B0000",
    fontWeight: 'bold',
    marginTop: 10,
  }
});

export default RealizarLogin;
