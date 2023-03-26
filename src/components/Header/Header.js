import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <View style={styles.headerPrincipal}>
        <MaterialIcons name="email" size={30} color="white" />
        <Text style={styles.nomeLoja}>Mercadinho</Text>
        <View style={styles.icones}>
          <View style={styles.iconeCarrinho}>
            <AntDesign name="shoppingcart" size={30} color="white" />
            <Text style={styles.carrinhoText}>{props.carrinho}</Text>
          </View>
          <View style={styles.iconeCoracao}>
            <AntDesign name="heart" size={27} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.pesquisaView}>
        <TextInput style={styles.input} placeholder="Pesquisa" />
      </View>
    </View>
  );
}
