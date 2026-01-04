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
          paddingHorizontal: 20,
          paddingTop: 10,
          backgroundColor: "#ddd",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: true }} />
    </Stack>
  );
}
