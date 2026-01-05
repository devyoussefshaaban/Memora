import { Note } from "@/models/Note";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }: { notes: Note[] }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item: Note) => item.id.toString()}
      renderItem={({ item }) => <NoteItem key={item.id} item={item} />}
    />
  );
};

export default NoteList;

const styles = StyleSheet.create({});
