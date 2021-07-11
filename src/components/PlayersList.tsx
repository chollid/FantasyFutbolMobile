import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, View } from "react-native";
import PlayerListItems from "../components/PlayerListItem";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { players } from "../data/players";
import { allPlayersState, filteredPlayers } from "../atoms/Players";

const PlayerList = () => {
  // const [players] = useRecoilState(allPlayersState); //Need value and setter
  //const setPlayers = useSetRecoilState(allPlayerState); //Only sets the state
  const players = useRecoilValue(filteredPlayers); //Just the value

  return (
    <BottomSheetFlatList
      data={players}
      renderItem={({ item }) => <PlayerListItems player={item} />}
    />
  );
};

export default PlayerList;

const styles = StyleSheet.create({
  contentContainer: {},
});
