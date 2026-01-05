import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddNoteButton = ({
  toggleModal,
  modalVisible,
}: {
  toggleModal: (prev: boolean) => void;
  modalVisible: boolean;
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => toggleModal(modalVisible)}
    >
      <Text style={styles.buttonText}>+ Add Note</Text>
    </TouchableOpacity>
  );
};

export default AddNoteButton;

const styles = StyleSheet.create({
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
});
