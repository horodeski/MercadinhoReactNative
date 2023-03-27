import { StyleSheet, View, Text } from "react-native";
import Header from "mercadinho/src/components/Header/Header";
import { ScrollView } from "react-native";
import Main from "mercadinho/src/components/Main/Main";
import Nav from "mercadinho/src/components/Nav/Nav";
import { useState } from "react";

export default function App() {
  const [carrinho, setCarrinho] = useState(0);
  function adicionar(id) {
    setCarrinho(carrinho + 1);
  }
  return (
    <View style={styles.body}>
      <Header carrinho={carrinho} />
        <View style={styles.avisoView}>
          <Text style={styles.mensagemAviso}>
            FRETE GRÁTIS A PARTIR DE R$30
          </Text>
        </View>
      <ScrollView>
        <Nav />
        <Main adicionar={() => adicionar(1)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 27,
    backgroundColor: "#F7F7F7",
    flex: 1,
  },
  avisoView: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00C1FF",
  },
  mensagemAviso: {
    color: "#fff",
    fontWeight: "600",
  },
});
