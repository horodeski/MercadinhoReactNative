import { Component } from "react";
import { View } from "react-native";
import Card from "mercadinho/src/components/Nav/Card";
import styles from "./style";
import { ScrollView } from "react-native";

export default class Nav extends Component {
  render() {
    return (
      <View style={styles.nav}>
        <ScrollView horizontal={true}>
          <Card
            nomeCategoria="Café e outras Bebidas"
            caminhoImagem={{uri:'https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2019/grocery/categorias/alimentos/02_alimentosebebidas_categoria_440x534.jpg'}}
          />
          <Card
            nomeCategoria="Cereais e Granolas"
            caminhoImagem={{uri:'https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2019/grocery/categorias/alimentos/03_alimentosebebidas_categoria_440x534.jpg'}}
          />
          <Card
            nomeCategoria="Alimentos para Bebês"
            caminhoImagem={{uri:'https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2019/grocery/categorias/alimentos/04_alimentosebebidas_categoria_440x534_v2.jpg'}}
          />
          <Card
            nomeCategoria="Alimentos Enlatados"
            caminhoImagem={{uri:'https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2019/grocery/categorias/749_CO_Grocery_enlatados_440x300.jpg'}}
          />
        </ScrollView>
      </View>
    );
  }
}
