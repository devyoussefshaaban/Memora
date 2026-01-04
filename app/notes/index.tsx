import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface Note {
  id: number;
  title: string;
}

const NotesScreen = () => {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: "First Note" },
    { id: 2, title: "Second Note" },
    { id: 3, title: "Third Note" },
  ]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = (prev: boolean) => setModalVisible(!prev);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item: Note) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleModal(modalVisible)}
      >
        <Text style={styles.buttonText}>+ Add Note</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        style={styles.modal}
      >
        <View style={styles.modalView}>
          <Text>Create New Note</Text>
          <TouchableWithoutFeedback>
            <TextInput placeholder="Note Title" />
          </TouchableWithoutFeedback>
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={() => toggleModal(modalVisible)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleModal(modalVisible)}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NotesScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ddd",
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,
    paddingBottom: 80,
  },
  noteItem: {
    backgroundColor: "#ddd",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  button: {
    width: 150,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingVertical: 20,
  },
  modal: {
    backgroundColor: "#fff",
    marginTop: 200,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalView: {
    position: "absolute",
    top: "50%",
    left: "10%",
    right: "10%",
    transform: [{ translateY: "-50%" }],
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});
