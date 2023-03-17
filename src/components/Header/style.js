import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#00C1FF",
        padding: 20,
    },
    icones: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    iconeCarrinho: {
        marginRight: 10,
    },
    nomeLoja: {
        fontWeight: "bold",
        fontSize: 26,
        color: "white",
    },
    button: {
        backgroundColor: "#00C1FF",
    }
});

export default styles