import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { positionFilterState } from "../atoms/Players";

const positions = ["FWD", "MID", "DEF", "GK"];

const Filters = () => {
  const [positionFilter, setPositionFilter] =
    useRecoilState(positionFilterState);

  const onFilterPress = (position: string) => {
    setPositionFilter((currentPositionFilter) => [
      ...currentPositionFilter,
      position,
    ]);
  };
  console.warn(positionFilter);
  const isSelected = (position) => {
    return positionFilter.includes(position);
  };
  return (
    <View style={styles.container}>
      {/* Map through each Position in array and render a Filter button */}
      {positions.map((position) => (
        <Pressable
          onPress={() => onFilterPress(position)}
          style={[
            styles.textBorder,
            { backgroundColor: isSelected(position) ? "#960606" : "#ffdb91" },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: isSelected(position) ? "white" : "black" },
            ]}
          >
            {position}
          </Text>
        </Pressable>
      ))}
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
