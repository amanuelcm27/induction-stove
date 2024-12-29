import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Overview = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Image */}
        <Image source={require("../../assets/images/fire.png")} style={styles.headerImage} />

        {/* Title */}
        <Text style={styles.title}>Induction Stove Overview</Text>

        {/* Description */}
        <Text style={styles.description}>
          An induction stove is a modern cooking appliance that uses electromagnetic
          energy to heat cookware directly. Unlike traditional stoves, it doesn't
          rely on flames or heating elements, making it efficient, safe, and fast.
        </Text>

        {/* Key Features */}
        <Text style={styles.subtitle}>Key Features:</Text>
        <View style={styles.featuresList}>
          <Text style={styles.featureItem}>• Energy-efficient cooking</Text>
          <Text style={styles.featureItem}>• Instant temperature control</Text>
          <Text style={styles.featureItem}>• Safe and flameless design</Text>
          <Text style={styles.featureItem}>• Easy to clean</Text>
          <Text style={styles.featureItem}>• Modern and sleek appearance</Text>
        </View>

        {/* Note */}
        <Text style={styles.note}>
          Note: Only compatible with induction-ready cookware.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Overview;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FF5733",
    borderRadius: 20,
    alignSelf: "flex-start",
    margin: 24,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
  },
  headerImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  featuresList: {
    width: "100%",
    marginBottom: 20,
  },
  featureItem: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
    lineHeight: 22,
  },
  note: {
    fontSize: 14,
    color: "#FF5733",
    textAlign: "center",
    fontStyle: "italic",
  },
});
