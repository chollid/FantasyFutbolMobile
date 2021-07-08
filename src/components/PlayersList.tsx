import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, View } from "react-native";
import PlayerListItems from "../components/PlayerListItem";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { players } from "../data/players";
import { allPlayersState } from "../atoms/Players";

const PlayerList = () => {
  // const [players] = useRecoilState(allPlayersState); //Need value and setter
  const players = useRecoilValue(allPlayersState); //Just the value
  const setPlayers = useSetRecoilState(allPlayersState); //Only sets the state

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
