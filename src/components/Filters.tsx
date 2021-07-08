import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Filters = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBorder}>
        <Text style={styles.text}>FWD</Text>
      </View>
      <View style={styles.textBorder}>
        <Text style={styles.text}>MID</Text>
      </View>
      <View style={styles.textBorder}>
        <Text style={styles.text}>DEF</Text>
      </View>
      <View style={styles.textBorder}>
        <Text style={styles.text}>GK</Text>
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 15,
  },
  textBorder: {
    borderRadius: 30,
    backgroundColor: "#ffdb91",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {},
});
