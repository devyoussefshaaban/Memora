import { Note } from "@/models/Note";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NoteItem = ({ item }: { item: Note }) => {
  return (
    <View style={styles.noteItem}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  noteItem: {
    backgroundColor: "#ddd",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
