import React, { Dispatch, SetStateAction } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddNoteModal = ({
  modalVisible,
  toggleModal,
  saveNoteHandler,
  newNote,
  setNewNote,
}: {
  modalVisible: boolean;
  toggleModal: (prev: boolean) => void;
  saveNoteHandler: (title: string) => void;
  newNote: { title: string };
  setNewNote: Dispatch<SetStateAction<{ title: string }>>;
}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      style={styles.modal}
    >
      <View style={styles.modalView}>
        <Text style={styles.title}>Create New Note</Text>
        <TextInput
          style={styles.input}
          placeholder="Note Title"
          value={newNote.title}
          onChangeText={(text) => setNewNote({ ...newNote, title: text })}
        />
        <View style={styles.modalButtons}>
          <TouchableOpacity
            style={styles.buttonOutlined}
            onPress={() => toggleModal(modalVisible)}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => saveNoteHandler(newNote.title)}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddNoteModal;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  button: {
    color: "#fff",
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonOutlined: {
    borderColor: "orange",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
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
