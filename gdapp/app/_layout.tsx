import CustomHeader from "@/components/customHeader";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{ header: () => <CustomHeader/> }}
    />
  </Stack>
);
}
