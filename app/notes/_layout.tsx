import { Stack } from "expo-router";

const NotesLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 15,
          fontWeight: "bold",
        },
      }}
    />
  );
};

export default NotesLayout;
