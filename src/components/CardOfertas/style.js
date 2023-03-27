import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    fotoProduto: {
        width: "100%",
        height: 110,
        borderRadius: 15,
    },
    card: {
        width: 120,
        margin: 5,
        borderRadius: 15,
        padding: 5,
        backgroundColor: "#fff",

    },
    nomeValor: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nomeProduto: {
        fontSize: 15,
        fontWeight: "600",
    },
    valorProduto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00C1FF"
    },
    carrinhoGostei: {
        flexDirection: "row",
    },
    buttonCarrinho: {
        backgroundColor: "#00C1FF",
        width: "20%",
    },
    infos: {
        padding: 5,
    }

});

export default styles