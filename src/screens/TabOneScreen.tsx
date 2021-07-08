import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import Field from "../components/field/Field";
import TeamStats from "../components/TeamStats";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Filters from "../components/Filters";
import { StatusBar } from "expo-status-bar";
import PlayerList from "../components/PlayersList";

export default function TabOneScreen() {
  const playersBottomSheet = useRef<BottomSheet>(null);
  const filterBottomSheet = useRef<BottomSheet>(null);
  const snapPoints = [0, "50%"];

  const viewPlayers = () => {
    playersBottomSheet.current?.expand();
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/BackgroundSoccerMobile1.jpg")}
        style={{ flex: 1 }}
      >
        <View style={styles.middleContainer}>
          {/* <Text style={styles.text}>Inside</Text> */}
          <TeamStats />
          <Field />
          <Pressable style={styles.fieldButton} onPress={() => viewPlayers()}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              View Players
            </Text>
          </Pressable>

          <BottomSheet
            ref={playersBottomSheet}
            index={0}
            snapPoints={snapPoints}
          >
            <View style={styles.filterContainer}>
              <Pressable
                style={styles.filterButton}
                onPress={() => filterBottomSheet.current?.expand()}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Filter
                </Text>
              </Pressable>
            </View>
            <PlayerList />
          </BottomSheet>

          <BottomSheet
            ref={filterBottomSheet}
            index={0}
            snapPoints={snapPoints}
          >
            <Filters />
          </BottomSheet>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#11700f",
  },
  middleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  fieldButton: {
    width: "90%",
    alignItems: "center",
    color: "white",
    backgroundColor: "#eb2a57",
    // marginTop: "auto", //***** Very cool!
    marginTop: 20,
    marginVertical: 15,
    padding: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filterContainer: {
    alignItems: "center",
  },
  filterButton: {
    width: "60%",

    alignItems: "center",
    color: "white",
    backgroundColor: "#333333",
    // marginTop: "auto", //***** Very cool!
    marginTop: 20,
    marginVertical: 15,
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentContainer: {},
});
