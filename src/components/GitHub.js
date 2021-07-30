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
      <Tex>Hi there, let's play Soccer!</Tex>
      <Tex>Hi there, let's play Soccer!</Tex>
      <Tex>Hi there, let's play Soccer!</Tex>
      <Tex>Hi there, let's play Soccer!</Tex>
      <Tex>Hi there, let's play Soccer!</Tex>
      <Tex>Hi there, let's play Soccer!</Tex>
      <Tex>Hi there, let's play Soccer!</Tex>
      <Tex>Hi there, let's play Soccer!</Tex>
      <Tex>Hi there, let's play Soccer!</Tex>
      <Tex>Hi there, let's play Soccer!</Tex>
    </View>
  );
};

export default GitHub;

const styles = StyleSheet.create({});
