import React, { useState } from "react";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { Content, Label, TextInputLogin } from "./styles";
import { TextInput, Alert } from "react-native";
import colors from "../../styles/colors";
import Button from "../../components/Button";
import { StatusBar } from "react-native";
import { signIn } from "../../services/security";
import { api } from "../../services/api";

function Login({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e) => {
    setLogin({ ...login, email: e });
  };

  const handlePassword = (e) => {
    setLogin({ ...login, password: e });
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post("/sessions", login);

      signIn(response.data);

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      if (error.response) {
        Alert.alert("Ops", error.response.data.error);
      }
    }
  };

  return (
    <Container>
      <ToolBar>
        <TextToolBar>Faça Login </TextToolBar>
      </ToolBar>
      <Content>
        <Label>E-Mail</Label>
        <TextInputLogin
          autoCompleteType="email"
          placeholderTextColor={colors.lightTransparent}
          placeholder="Digite o seu e-mail"
          onChangeText={handleEmail}
        />
        <Label>senha</Label>
        <TextInputLogin
          autoCompleteType="password"
          placeholder="Digite a sua senha"
          secureTextEntry={true}
          placeholderTextColor={colors.lightTransparent}
          onChangeText={handlePassword}
        />
        <Button
          handlePress={handleSubmit}
          Text="Entrar"
          disabled={login.email === "" && login.password === ""}
          style={{ width: "96%" }}
        />
      </Content>
    </Container>
  );
}

export default Login;
