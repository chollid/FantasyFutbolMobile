import BottomSheet from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BottomSheetDrawer = () => {
  // const snapPoints = props.snapPoints
  // const snapPoints = [0, "50%"];

  return (
    <View>
      <BottomSheet
        // ref={bottomSheetRef}
        index={1}
        // snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  contentContainer: {},
});
