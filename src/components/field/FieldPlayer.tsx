import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type FieldPlayerProps = {
  player: null;
  position: string;
};

const FieldPlayer = (props: FieldPlayerProps) => {
  const { player, position } = props;
  return (
    <View style={{ alignItems: "center" }}>
      {player ? (
        <View
          style={{ borderRadius: 20, backgroundColor: "white", padding: 5 }}
        >
          <Ionicons name="shirt-sharp" size={35} color={"#1052e0"} />
        </View>
      ) : (
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "black",
            padding: 5,
            opacity: 0.35,
          }}
        >
          <Ionicons name="shirt-outline" size={35} color={"white"} />
        </View>
      )}

      <View style={styles.textBorder}>
        <Text style={styles.iconText}>{position}</Text>
      </View>
    </View>
  );
};

export default FieldPlayer;

const styles = StyleSheet.create({
  iconText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  textBorder: {
    backgroundColor: "#3323ad",
    paddingHorizontal: 7,
    padding: 3,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
