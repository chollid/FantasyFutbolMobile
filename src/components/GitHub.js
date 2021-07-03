import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const thisThing = () => {
  Alert.alert("Hey");
};

const GitHub = () => {
  return (
    <View>
      <Text>This is my Component.</Text>
      <Button
        onPress={() => {
          thisThing();
        }}
      ></Button>
    </View>
  );
};

export default GitHub;

const styles = StyleSheet.create({});
