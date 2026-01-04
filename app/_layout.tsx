import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 15,
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#ddd",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Home",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="notes"
        options={{
          headerShown: true,
          headerTitle: "Notes",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
