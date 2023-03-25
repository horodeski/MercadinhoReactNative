import { View } from "react-native";
import Card from "mercadinho/src/components/Card/Card";
import styles from "./style";

export default function Main() {
  return (
    <View style={styles.main}>
      <Card
        nomeProduto="Lasanha Seara"
        valorProduto={"12,93"}
        caminhoImagem={{uri:'https://api.cndr.me/images/png/547190.png'}}
      />
      <Card
        nomeProduto="Massa de Sêmola Ninfa"
        valorProduto={"2,69"}
        caminhoImagem={{uri:'https://api.cndr.me/images/png/1339449.png'}}
      />
      <Card
        nomeProduto="Biscoito Tortinhas Marilan"
        valorProduto={"2,27"}
        caminhoImagem={{uri:'https://api.cndr.me/images/png/1980390.png'}}
      />
      <Card
        nomeProduto="Sabão em Pó Surf"
        valorProduto={"7,69"}
        caminhoImagem={{uri:'https://api.cndr.me/images/png/2041333.png'}}
      />
      <Card
        nomeProduto="Espinafre Gasparin"
        valorProduto={"3,99"}
        caminhoImagem={{uri:'https://api.cndr.me/images/png/2070217.png'}}
      />
      <Card
        nomeProduto="Tomate Grape Gasparin"
        valorProduto={"4,79"}
        caminhoImagem={{uri:'https://api.cndr.me/images/png/2070316.png'}}
      />
      <Card
        nomeProduto="Sorvete Nestlé"
        valorProduto={"14,86"}
        caminhoImagem={{uri:'https://api.cndr.me/images/png/1924562.png'}}
      />
      <Card
        nomeProduto="Bife da Alcatra Bovina"
        valorProduto={"39,85"}
        caminhoImagem={{uri:'https://api.cndr.me/images/png/1891761.png'}}
      />
    </View>
  );
}
