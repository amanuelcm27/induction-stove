import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const PageLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="overview" />
      <Stack.Screen name="howto" />
      <Stack.Screen name="analytics" />

      <Stack.Screen name="tips" />
      <Stack.Screen name="troubleshoot" />
      <Stack.Screen name="guidelines" />
      <Stack.Screen name="support" />
    </Stack>
  );
};

export default PageLayout;
