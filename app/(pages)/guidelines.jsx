import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const Guidelines = () => {
  const router = useRouter();

  // List of safety guidelines
  const guidelines = [
    {
      id: "1",
      icon: require("../../assets/images/fireicon.png"), // Replace with your fire icon
      text: "Keep flammable items away from the stove.",
    },
    {
      id: "2",
      icon: require("../../assets/images/fan.png"),
      text: "Ensure proper ventilation around the appliance.",
    },
    {
      id: "3",
      icon: require("../../assets/images/stop.png"),
      text: "Never touch the cooking zone immediately after use.",
    },
    {
      id: "4",
      icon: require("../../assets/images/sweat-hand.png"),
      text: "Avoid using wet hands to operate the stove.",
    },
    {
      id: "5",
      icon: require("../../assets/images/frying-pan.png"),
      text: "Always use induction-compatible cookware.",
    },
    {
      id: "6",
      icon: require("../../assets/images/unplugged.png"),
      text: "Disconnect the power when cleaning the stove.",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.guidelineItem}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.guidelineText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>Safety Guidelines</Text>

        {/* Guidelines List */}
        <FlatList
          data={guidelines}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

export default Guidelines;

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
    margin: 25,
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
  list: {
    paddingVertical: 10,
  },
  guidelineItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  guidelineText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    flexShrink: 1,
  },
});
