import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const Support = () => {
  const router = useRouter();

  // Function to handle contact via email
  const handleEmail = () => {
    Linking.openURL("mailto:support@inductionstove.com");
  };

  // Function to handle phone support
  const handlePhone = () => {
    Linking.openURL("tel:+1234567890");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>Contact Support</Text>

        {/* Support Options */}
        <View style={styles.supportOptions}>
          <TouchableOpacity style={styles.supportButton} onPress={handleEmail}>
            <Image
              source={require("../../assets/images/gmail.png")} // Replace with your email icon
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Email Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportButton} onPress={handlePhone}>
            <Image
              source={require("../../assets/images/phone.png")} // Replace with your phone icon
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Phone Support</Text>
          </TouchableOpacity>


        </View>
      </View>
    </SafeAreaView>
  );
};

export default Support;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ff6666",
    borderRadius: 20,
    alignSelf: "flex-start",
    margin: 35,
    marginTop:50,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  supportOptions: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  supportButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  buttonText: {
    fontSize: 16,
    color: "#555",
  },
});
