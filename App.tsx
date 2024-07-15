import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131006",
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 38,
  },
  eventDate: {
    color: "#6B6B6B",
    marginTop: 5,
    fontSize: 16,
  },
});
