import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#fff",
    borderBottomColor: "#00c1ff",
    borderBottomWidth: 5,
    height: 70,
  },
  categorias: {
    flexDirection: "row",
  },
  fotoCategoria: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  card: {
    width: 200,
    margin: 5,
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: 15,
    padding: 5,
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  },
  nomeCategoria: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "700",
  },
});

export default styles;
