import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#131006",
  },
  eventName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 38,
    color: "#FDFCFE",
  },
  eventDate: {
    marginTop: 5,
    fontSize: 16,
    color: "#6B6B6B",
  },
  input: {
    height: 56,
    flex: 1,
    marginRight: 12,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    color: "#FFF",
    backgroundColor: "#1F1E25",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32CF67",
  },
  buttonText: {
    fontSize: 24,
    color: "#FFF",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    width: "100%",
    fontSize: 14,
    color: "#FFF",
    textAlign: "center",
  },
});
