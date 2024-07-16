import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Maria",
    "Joao",
    "Barbosa",
    "Birobiro",
    "Lambao",
    "3 pernas",
    "Birusca",
    "Clementina",
    "Balutola",
  ];

  function handleParticipantAdd() {
    if (participants.includes("blabla")) {
      Alert.alert("existe", "Ja existe um participante na lista com esse nome");
      return;
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover ${name} da lista ?`, [
      { text: "Sim", onPress: () => Alert.alert("Deletado!") },
      { text: "Não", style: "cancel" },
    ]);
    console.log(`Removendo o ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento? Adicione participantes a sua lista de
            presença
          </Text>
        )}
      />
    </View>
  );
}
