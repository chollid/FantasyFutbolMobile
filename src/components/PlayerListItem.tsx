import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Player } from "../types";

interface Props {
  player: Player;
}

// MediaDeviceInfo.api-sports.football/players/1.png

const PlayerListItem = ({ player }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://media.api-sports.io/football/players/${player.id}.png`,
        }}
        style={styles.image}
      />
      <View style={{ flexGrow: 1, marginLeft: 15 }}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.match}>{player.match}</Text>
      </View>
      <View style={[styles.priceContainer, { marginRight: 50 }]}>
        <Text style={styles.price}>
          €{(player.price / 1_000_000).toFixed(1)}m
        </Text>
        <Text style={styles.position}>{player.position}</Text>
      </View>
      <Text style={styles.points}>{player.totalPoints}</Text>
    </View>
  );
};

export default PlayerListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 25,
    borderColor: "#dee",
    borderWidth: 2,
    marginLeft: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  match: {},
  price: {
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  position: {},
  points: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 15,
  },
});
