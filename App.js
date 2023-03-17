import { StyleSheet, View } from 'react-native';
import Card from 'mercadinho/src/components/Card/Card';
import Header from 'mercadinho/src/components/Header/Header';
import { ScrollView } from 'react-native';


export default function App() {
  return (
    <View style={styles.body}>
      <ScrollView>
      <Header />
      <View style={styles.main}>
        <Card nomeProduto="Carro muito bacana" valorProduto={15} caminhoImagem={require("mercadinho/src/img/carro.jpeg")} />
        <Card nomeProduto="Casa muito bonita" valorProduto={384} caminhoImagem={require("mercadinho/src/img/casa.jpeg")} />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 27,
    backgroundColor: '#fff',
  },
  main: {
  },
});
