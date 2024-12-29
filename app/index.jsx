import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  // Function to toggle the power status, show the modal, and navigate to analytics
  const handlePowerToggle = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false); // Hide modal after 2 seconds
      router.push("/analytics"); // Redirect to the analytics page after the modal is hidden
    }, 2000);
  };

  return (
    <>
      <View style={styles.container}>
        {/* Power Button */}
        <TouchableOpacity
          style={styles.powerButton}
          onPress={handlePowerToggle}
        >
          <Image
            source={require("../assets/images/power.png")} // Replace with your power icon image
            style={styles.powerIcon}
          />
        </TouchableOpacity>

        {/* Header Image */}
        <Image
          source={require("../assets/images/fire.png")}
          style={styles.headerImage}
        />

        {/* Title */}
        <Text style={styles.title}>Welcome to the Stove Manual</Text>

        {/* Navigation Buttons in two columns */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/overview")}
          >
            <Text style={styles.buttonText}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/howto")}
          >
            <Text style={styles.buttonText}>How to Use</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/tips")}
          >
            <Text style={styles.buttonText}>Maintenance Tips</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/troubleshoot")}
          >
            <Text style={styles.buttonText}>Troubleshooting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/guidelines")}
          >
            <Text style={styles.buttonText}>Safety Guidelines</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/support")}
          >
            <Text style={styles.buttonText}>Contact Support</Text>
          </TouchableOpacity>
          {/* Full width Analytics Button */}
          <TouchableOpacity
            style={[styles.button, styles.fullWidthButton]} // Add the full width style
            onPress={() => router.push("/analytics")}
          >
            <Text style={styles.buttonText}>Analytics</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Power Status Modal */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require("../assets/images/power.png")} // Replace with power on icon
              style={styles.modalIcon}
            />
            <Text style={styles.modalText}>Power Turned On</Text>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  headerImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  button: {
    width: "45%", // Make the buttons 45% width to fit two per row
    paddingVertical: 45,
    backgroundColor: "#FF5733",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  fullWidthButton: {
    width: "100%", // Makes the Analytics button full width
    marginRight: 15,
    backgroundColor: 'gray',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  powerButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#FF5733",
    borderRadius: 50,
    margin:10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  powerIcon: {
    width: 30,
    height: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  modalIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
