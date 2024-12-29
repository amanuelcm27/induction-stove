import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Tips = () => {
  const router = useRouter();

  // Tips Data
  const tipsData = [
    "Clean the induction stove surface regularly with a soft, damp cloth.",
    "Avoid using abrasive cleaners or scrubbing pads that can damage the surface.",
    "Use cookware with flat bottoms to ensure even heating.",
    "Always dry the bottom of the cookware before placing it on the stove.",
    "Do not use the stove near flammable materials or in a humid environment.",
    "Unplug the stove when not in use to save energy and increase safety.",
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Maintenance Tips</Text>

        {/* Tips List */}
        <View style={styles.tipsContainer}>
          {tipsData.map((tip, index) => (
            <View key={index} style={styles.tipCard}>
              <Text style={styles.tipNumber}>{`Tip ${index + 1}`}</Text>
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tips;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#008CBA",
    borderRadius: 20,
    alignSelf: "flex-start",
    margin: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444",
    marginBottom: 20,
  },
  tipsContainer: {
    marginTop: 10,
  },
  tipCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: "#008CBA",
  },
  tipNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008CBA",
    marginBottom: 5,
  },
  tipText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
});
