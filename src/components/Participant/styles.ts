import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#1F1E25",
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    color: "#FFF",
  },
  button: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#E23C44",
  },
  buttonText: {
    fontSize: 24,
    color: "#FFF",
  },
});
