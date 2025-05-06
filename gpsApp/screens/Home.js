// Jacquys Barbosa da SIlva e Nicole de Oliveira Cafalloni
import React, { useEffect, useState } from "react";
import { auth } from '../firebaseConfig';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
    Pressable,
    ScrollView,
  Dimensions,
} from "react-native";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import { getApp } from "firebase/app";

const screenWidth = Dimensions.get("window").width;

const Home = ({navigation}) => {
    <View>
      <TextInput style={styles.input} placeholder="Digite seu nome" />
      <Pressable style={styles.button} onPress={() => {}}>
        Hacker
      </Pressable>
  
      <Pressable style={styles.button} onPress={() => {}}>
        React
      </Pressable>
  
      <Pressable style={styles.button} onPress={() => {}}>
        mobile
      </Pressable>
  
      <ScrollView>
        <Image
          source={{
            uri: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          }}
          style={styles.image}
        />
        <Text>Post title</Text>
  
        <Image
          source={{
            uri: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          }}
          style={styles.image}
        />
        <Text>Post title</Text>
  
        <Image
          source={{
            uri: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          }}
          style={styles.image}
        />
        <Text>Post title</Text>
      </ScrollView>
    </View>;
    return;
  }
  
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: "black",
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    image: {
      width: 200,
      height: 200,
    },
    button: {
      backgroundColor: "blue",
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
  });
  
export default Home;