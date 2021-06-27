import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FieldPlayer from "./FieldPlayer";

import field from "../../assets/images/betterFieldPic.jpg";

const players: { [key: string]: null[] } = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GK: [null],
};

const Field = () => {
  return (
    <View>
      <ImageBackground
        source={field}
        resizeMode="cover"
        style={styles.fieldBackground}
      >
        {Object.keys(players).map((position) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {players[position].map((player) => (
              <FieldPlayer player={player} position={position} />
            ))}
          </View>
        ))}
      </ImageBackground>
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  fieldBackground: {
    width: "100%",
    aspectRatio: 2 / 3,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
