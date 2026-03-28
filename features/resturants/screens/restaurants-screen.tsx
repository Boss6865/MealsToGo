import React from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ResturantInfo } from "../components/resturant-info";
export const RestaurantScreen = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.titleContainer}>
        <ResturantInfo />
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
  },
  search: {},
});
