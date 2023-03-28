import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    fotoProduto: {
        width: "100%",
        height: 150,
        borderRadius: 15,
    },
    card: {
        width: 150,
        margin: 5,
        borderRadius: 15,
        padding: 5,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-between",

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
    infos: {
        padding: 5,
    }

});

export default styles