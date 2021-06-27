import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TeamStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={[styles.value]}>Players</Text>
        <Text style={styles.label}>0 / 15</Text>
      </View>
      <View style={[styles.valueContainer]}>
        <Text style={styles.value}>Remaining</Text>
        <Text style={styles.label}>€100m</Text>
      </View>
    </View>
  );
};

export default TeamStats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#475fb5",
    width: "90%",
    // borderColor: "#4d66bd",
    borderColor: "#dde",
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  valueContainer: {
    marginRight: 25,
  },
  label: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  value: {
    color: "white",
  },
});
