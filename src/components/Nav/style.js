import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#fff",

  },
  categorias: {
    flexDirection: "row",
  },
  fotoCategoria: {
    width: "50%",
    height: 45,
    borderRadius: 50,
  },
  card: {
    width: 100,
    margin: 5,
    borderRadius: 15,
    padding: 5,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  nomeCategoria: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "700",
  },
});

export default styles;
