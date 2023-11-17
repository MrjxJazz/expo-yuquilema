import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Viewn } from 'react-native';
import { Button, TextInput, View } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button onPress={() => onLogin()} title="Iniciar Sesión" />
    </View>
  );
}
export default Login;



