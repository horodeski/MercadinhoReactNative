import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { AntDesign } from '@expo/vector-icons';

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.nomeLoja}>Mercadinho</Text>
            <View style={styles.icones}>
                <View style={styles.iconeCarrinho}>
                    <AntDesign name="shoppingcart" size={30} color="white" />
                </View>
                <View style={styles.iconeCoracao}>
                    <AntDesign name="heart" size={27} color="white" />
                </View>
                <Text>{props.carrinho}
                </Text>
            </View>
        </View>
    );
}
