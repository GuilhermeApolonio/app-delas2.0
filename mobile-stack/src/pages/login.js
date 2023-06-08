import React, { useState, useEffect } from 'react';
import { Button, TextInput, View, StyleSheet, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import axios from 'axios';

import { DadosScreen } from './profile/dados';
export default function LoginScreen({ navigation }) {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleNomeChange = (texto) => {
    setNomeCompleto(texto);
  };

  const handleCpfChange = (texto) => {
    setCpf(texto);
  };

  const handleEmailChange = (texto) => {
    setEmail(texto);
  };

  const handleSenhaChange = (texto) => {
    setSenha(texto);
  };

  const handleCadastroPress = () => {
    const data = {
      nome: nomeCompleto,
      cpf,
      email,
      senha,
    };
    navigation.navigate('Home');
    axios
      .post('http://192.168.1.11:3001/cad', data)
      .then((response) => {
        console.log('Dados enviados com sucesso:', response.data);
        navigation.navigate('DadosScreen', { 
          data: {
            nome: data.nome,
            cpf: data.cpf,
            email: data.email,
          },
        });
      })
      .catch((error) => {

      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.icone}>
        <Image
          source={require('../../assets/icone-delas.png')}
          style={{ width: 500, height: 200 }}
        />
      </View>
      <Text style={styles.cadastro}>Cadastro</Text>
      <View style={styles.input}>
        <MaterialIcons
          style={styles.icon}
          name="drive-file-rename-outline"
          size={24}
          color="grey"
        />
        <TextInput
          placeholder="Digite seu nome completo:"
          onChangeText={handleNomeChange}
        />
      </View>
      <View style={styles.input}>
        <Fontisto style={styles.icon} name="female" size={24} color="grey" />
        <TextInput
          placeholder="Digite seu CPF:"
          keyboardType="numeric"
          onChangeText={handleCpfChange}
        />
      </View>
      <View style={styles.input}>
        <Entypo style={styles.icon} name="email" size={24} color="grey" />
        <TextInput
          placeholder="Digite seu email:"
          onChangeText={handleEmailChange}
        />
      </View>
      <View style={styles.input}>
        <MaterialIcons
          style={styles.icon}
          name="vpn-key"
          size={24}
          color="grey"
        />
        <TextInput
          placeholder="Digite uma senha:"
          onChangeText={handleSenhaChange}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Cadastrar"
          color="#5E17EB"
          onPress={handleCadastroPress}
        />
      </View>
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
  input: {
    borderWidth: 3,
    borderColor: '#5E17EB',
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 15,
    flexDirection: 'row',
  },
  button: {
    padding: 20,
    width: 320,
  },
  icon: {
    paddingRight: 5,
  },
  cadastro: {
    fontSize: 30,
    color: '#5E17EB',
  },
  icone: {},
});
