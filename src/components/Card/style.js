import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    fotoProduto: {
        width: "100%",
        height: 400,
        borderRadius: 15
    },
    card: {
        padding: 15,
        margin: 20,
        borderWidth: 2,
        borderColor: "#00C1FF",
        borderRadius: 20,
    },
    nomeValor: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,

    },
    nomeProduto: {
        fontSize: 20,
        fontWeight: "bold",
    },
    valorProduto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00C1FF"
    },
    carrinhoGostei: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonCarrinho: {
        backgroundColor: "#00C1FF",
        width: "100%",
    },
    infos: {
        padding: 10,
    }

});

export default styles