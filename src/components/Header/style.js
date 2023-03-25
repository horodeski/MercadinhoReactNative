import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "column",
  },
  headerPrincipal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#f6f6f6",
    height: 40,
    marginTop: 10,
    paddingLeft: 10,
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
    color: "#00C1FF",
  },
  button: {
    backgroundColor: "#00C1FF",
  },
});

export default styles;
