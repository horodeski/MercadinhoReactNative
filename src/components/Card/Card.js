import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { View, Image } from "react-native";
import styles from "./style";

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image source={this.props.caminhoImagem} style={styles.fotoProduto} />
        <View style={styles.infos}>
          <View style={styles.nomeValor}>
            <Text style={styles.nomeProduto}>{this.props.nomeProduto}</Text>
          </View>
          <Text style={styles.valorProduto}>R${this.props.valorProduto}</Text>
          {/*                     <View style={styles.carrinhoGostei}>
                        <Button style={styles.buttonCarrinho} color="#00C1FF" title="Adicionar ao Carrinho" onPress={this.props.adicionar}></Button>
                        <AntDesign name="heart" size={32} color="#00C1FF" />
                    </View> */}
        </View>
      </View>
    );
  }
}
