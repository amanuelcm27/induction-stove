import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HowTo = () => {
  const router = useRouter();

  // State to track the active step for visual feedback
  const [activeStep, setActiveStep] = useState(null);

  // Steps data
  const steps = [
    { id: 1, text: "Place induction-compatible cookware on the stove's surface." },
    { id: 2, text: "Plug in the stove and press the power button to turn it on." },
    { id: 3, text: "Use the control panel to select the desired cooking mode or temperature." },
    { id: 4, text: "Adjust the power or heat level as needed using the buttons or slider." },
    { id: 5, text: "Once cooking is done, press the power button to turn off the stove." },
    { id: 6, text: "Allow the stove to cool before cleaning the surface with a soft cloth." },
  ];

  // Handle step tap for visual feedback
  const handleStepTap = (id) => {
    setActiveStep(id === activeStep ? null : id);
  };

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
        <Text style={styles.title}>How to Use Your Induction Stove</Text>

        {/* Steps */}
        <Text style={styles.subtitle}>Step-by-Step Instructions:</Text>
        <View style={styles.steps}>
          {steps.map((step) => (
            <TouchableOpacity
              key={step.id}
              style={[
                styles.stepContainer,
                activeStep === step.id && styles.activeStepContainer,
              ]}
              onPress={() => handleStepTap(step.id)}
            >
              <Text
                style={[
                  styles.stepText,
                  activeStep === step.id && styles.activeStepText,
                ]}
              >
                {step.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Note */}
        <Text style={styles.note}>
          Tip: Always use cookware with a flat base for optimal performance.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HowTo;

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
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  steps: {
    width: "100%",
    marginBottom: 20,
  },
  stepContainer: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  activeStepContainer: {
    backgroundColor: "#FF5733",
  },
  stepText: {
    fontSize: 16,
    color: "#555",
  },
  activeStepText: {
    color: "#fff",
    fontWeight: "bold",
  },
  note: {
    fontSize: 14,
    color: "#FF5733",
    textAlign: "center",
    fontStyle: "italic",
  },
});
