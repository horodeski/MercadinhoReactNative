import React, { Component } from "react";
import { Button, Text } from "react-native";
import { View, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./style";

export default class Card extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Image source={this.props.caminhoImagem} style={styles.fotoProduto}/>
                <View style={styles.infos}>
                    <View style={styles.nomeValor}>
                        <Text style={styles.nomeProduto}>{this.props.nomeProduto}</Text>
                        <Text style={styles.valorProduto}>R${this.props.valorProduto}</Text>
                    </View>
                    <View style={styles.carrinhoGostei}>
                        <Button style={styles.buttonCarrinho} color="#00C1FF" title="Adicionar ao Carrinho"></Button>
                        <AntDesign name="heart" size={32} color="#00C1FF" />
                    </View>
                </View>
            </View>
        );
    }
}