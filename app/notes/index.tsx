import { AddNoteButton, AddNoteModal, NoteList } from "@/components";
import { Note } from "@/models/Note";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const NotesScreen = () => {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: "First Note" },
    { id: 2, title: "Second Note" },
    { id: 3, title: "Third Note" },
  ]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [newNote, setNewNote] = useState<{ title: string }>({ title: "" });

  const toggleModal = () => setModalVisible(!modalVisible);

  const saveNoteHandler = (title: string) => {
    if (!title || !title.length || title.trim().length === 0) return;

    setNotes((prevNotes) => [
      ...prevNotes,
      { id: prevNotes.length + 1, title },
    ]);
    toggleModal();
    setNewNote({ title: "" });
  };

  return (
    <View style={styles.container}>
      <NoteList notes={notes} />

      <AddNoteButton modalVisible={modalVisible} toggleModal={toggleModal} />

      <AddNoteModal
        modalVisible={modalVisible}
        toggleModal={toggleModal}
        saveNoteHandler={saveNoteHandler}
        newNote={newNote}
        setNewNote={setNewNote}
      />
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
});
