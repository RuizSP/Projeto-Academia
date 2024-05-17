import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Função para buscar os usuários do servidor
    async function fetchUsuarios() {
      try {
        const response = await fetch('http://192.168.2.4:8082/users');
        const data = await response.json();
        setUsuarios(data); // Define os usuários recebidos do servidor no estado
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsuarios(); // Chama a função para buscar os usuários ao montar o componente
  }, []); // O segundo parâmetro do useEffect é um array vazio para garantir que o código seja executado apenas uma vez

  return (
    <ScrollView>
      {usuarios.map((usuario, index) => (
        <View key={index} style={{ borderBottomWidth: 1, padding: 10 }}>
          <Text>Nome: {usuario.name}</Text>
          <Text>Sobrenome: {usuario.sobrenome}</Text>
          <Text>CPF: {usuario.cpf}</Text>
          <Text>Data de Nascimento: {usuario.nasc}</Text>
          <Text>Telefone: {usuario.phone}</Text>
          <Text>Email: {usuario.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
