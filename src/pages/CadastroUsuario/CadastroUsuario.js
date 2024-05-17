import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { TextInputMask } from "react-native-masked-text";

export default function CadastroUsuario() {
  const [nome, setName] = useState(null);
  const [sobrenome, setSobrenome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [email, setEmail] = useState(null);
  const [datNasc, setDatNasc] = useState(null);
  const [senha, setSenha] = useState(null);

  function limparCampos() {
    setName('');
    setSobrenome('');
    setCpf('');
    setTelefone('');
    setEmail('');
    setDatNasc('');
    setSenha('');
  }

  const cadastrarUsuario = async () => {
    try {
      console.log(nome, sobrenome);
      await fetch('http://192.168.2.4:8082/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nome,
          sobrenome: sobrenome,
          cpf: cpf,
          nasc: datNasc,
          password: senha,
          phone: telefone,
          email: email,
        }),
      });
      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário. Verifique os campos e tente novamente.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Usuário</Text>
      <View style={styles.form}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} onChangeText={(text) => setName(text)} />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Sobrenome:</Text>
            <TextInput style={styles.input} onChangeText={(text) => setSobrenome(text)} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>CPF:</Text>
            <TextInputMask 
                type="cpf"
                style={styles.input} onChangeText={(text) => setCpf(text)} />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Telefone:</Text>
            <TextInputMask
                type={"cel-phone"}
                options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: "(99) ",
                }}
                style={styles.input}
                onChangeText={(text) => setTelefone(text)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Data de nascimento:</Text>
            <TextInputMask
                type="datetime"
                options={{
                    format: "DD/MM/YYYY"
                }}
                style={styles.input}
                onChangeText={(text) => setDatNasc(text)}
                />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput 
                secureTextEntry={true}
                style={styles.input}
                onChangeText={(text) => setSenha(text)} />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Repetir Senha:</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.input}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={cadastrarUsuario} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    width:"90%",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#145DA0",
  },
  form: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    backgroundColor: "#145DA0",
    borderRadius: 50,
    paddingVertical: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
