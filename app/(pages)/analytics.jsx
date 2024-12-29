import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider"; // Import the Slider component
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const Analytics = () => {
  const navigation = useNavigation();
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [temperature, setTemperature] = useState(25); // Default temperature
  const [power, setPower] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [socket, setSocket] = useState(null);

  const sendRequestToESP = async () => {
    try {
      const response = await axios.post("http://192.168.198.193:8000/api/esp_access/" , {
        command : isPowerOn ? "off" : "on",
      });
      
      console.log(response.data);
    } catch (error) {
      console.error("Error in sending request to ESP:", error);
    }
  };
  
  const togglePower = () => {
    setIsPowerOn(!isPowerOn);
    setIsModalVisible(true);
    sendRequestToESP();
  };

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.198.193:8000/ws/temperature/");
    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setTemperature(data.temperature);
      setPower(data.power);
    };
    ws.onerror = (error) => {
      console.log("WebSocket Error: ", error);
    };
    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };
    setSocket(ws);
    return () => {
      if (ws) ws.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      <Image
        source={require("../../assets/images/fire.png")}
        style={styles.stoveImage}
      />

      <View style={styles.analyticsContainer}>
        <View style={[styles.analyticsBox, { backgroundColor: "#FF6347" }]}>
          <MaterialIcons name="thermostat" size={40} color="white" />
          <Text style={styles.boxLabel}>Temperature</Text>
          <Text style={styles.boxValue}>{temperature}°C</Text>
        </View>

        <View style={[styles.analyticsBox, { backgroundColor: "#32CD32" }]}>
          <MaterialIcons name="power" size={40} color="white" />
          <Text style={styles.boxLabel}>Status</Text>
          <Text style={styles.boxValue}>{isPowerOn ? "On" : "Off"}</Text>
        </View>

        <View style={[styles.analyticsBox, { backgroundColor: "#FFD700" }]}>
          <MaterialIcons name="flash-on" size={40} color="white" />
          <Text style={styles.boxLabel}>Power Consumption</Text>
          <Text style={styles.boxValue}>{power}W</Text>
        </View>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100} // Assuming temperature range is 0°C to 100°C
        step={1}
        value={temperature}
        onValueChange={(value) => setTemperature(value)} // Update temperature on slider change
        minimumTrackTintColor="#FF6347"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#FF5733"
      />
      <Text style={styles.sliderLabel}>
        Adjust Temperature: {temperature}°C
      </Text>

      <TouchableOpacity style={styles.powerButton} onPress={togglePower}>
        <Text style={styles.powerButtonText}>Toggle Power</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Power {isPowerOn ? "On" : "Off"}
            </Text>
            <MaterialIcons
              name={isPowerOn ? "power" : "power-off"}
              size={50}
              color={isPowerOn ? "green" : "red"}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#FF5733",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
  stoveImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  analyticsContainer: {
    width: "100%",
    marginBottom: 30,
  },
  analyticsBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  boxLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  boxValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
  },
  slider: {
    width: "80%",
    height: 4,
    marginTop: 20,
  },
  sliderLabel: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
  },
  powerButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "#FF5733",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  powerButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 250,
    height: 250,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FF5733",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Analytics;
