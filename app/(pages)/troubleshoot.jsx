import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Troubleshoot = () => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState({});

  // Troubleshooting Issues
  const issues = [
    {
      title: "The stove won't turn on",
      details:
        "Ensure the power cord is plugged in securely. Check if the socket has power by testing another device. If the problem persists, contact support.",
    },
    {
      title: "Cookware is not heating",
      details:
        "Ensure you're using induction-compatible cookware with a flat bottom. Check if the cookware is properly centered on the cooking zone.",
    },
    {
      title: "Error codes on display",
      details:
        "Refer to the user manual to identify the meaning of the error code. Restart the stove if needed. If the error persists, reach out to support.",
    },
    {
      title: "Overheating issues",
      details:
        "Ensure proper ventilation around the stove. Avoid using it in direct sunlight or a humid environment. Allow the stove to cool before restarting.",
    },
  ];

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Troubleshooting</Text>

        {/* Troubleshooting Sections */}
        <View>
          {issues.map((issue, index) => (
            <View key={index} style={styles.issueContainer}>
              {/* Issue Title */}
              <TouchableOpacity
                onPress={() => toggleSection(index)}
                style={styles.issueHeader}
              >
                <Text style={styles.issueTitle}>{issue.title}</Text>
                <Text style={styles.toggleIcon}>
                  {expandedSections[index] ? "-" : "+"}
                </Text>
              </TouchableOpacity>
              {/* Issue Details */}
              {expandedSections[index] && (
                <Text style={styles.issueDetails}>{issue.details}</Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Troubleshoot;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#D9534F",
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
    color: "#333",
    marginBottom: 20,
  },
  issueContainer: {
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  issueHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#008CBA",
  },
  issueTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  toggleIcon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  issueDetails: {
    padding: 15,
    fontSize: 16,
    color: "#555",
    backgroundColor: "#f9f9f9",
    lineHeight: 22,
  },
});
