import { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";
import { ScrollView } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: props.categoria.imagem }}
        style={styles.fotoCategoria}
      />
      <View style={styles.infos}>
        <View style={styles.nomeValor}>
          <Text style={styles.nomeCategoria}>{props.categoria.nome}</Text>
        </View>
      </View>
    </View>
  );
}

export default function Nav() {
  const categorias = [
    {
      nome: "Café e outras Bebidas",
      imagem:
        "https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2019/grocery/categorias/alimentos/02_alimentosebebidas_categoria_440x534.jpg",
    },
    {
      nome: "Cereais e Granolas",
      imagem:
        "https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2019/grocery/categorias/alimentos/03_alimentosebebidas_categoria_440x534.jpg",
    },
    {
      nome: "Alimentos para Bebês",
      imagem:
        "https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2019/grocery/categorias/alimentos/04_alimentosebebidas_categoria_440x534_v2.jpg",
    },
    {
      nome: "Alimentos Enlatados",
      imagem:
        "https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2019/grocery/categorias/749_CO_Grocery_enlatados_440x300.jpg",
    },
  ];
  return (
    <View style={styles.nav}>
      <ScrollView horizontal={true}>
        <View style={styles.categorias}>
          {categorias.map((categoria) => (
            <Card categoria={categoria} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
