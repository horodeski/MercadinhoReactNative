import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { View, Image, Button } from "react-native";
import styles from "./style";

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image source={this.props.caminhoImagem} style={styles.fotoCategoria} />
        <View style={styles.infos}>
          <Text style={styles.nomeCategoria}>{this.props.nomeProduto}</Text>
        </View>
      </View>
    );
  }
}
